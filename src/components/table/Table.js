import React from 'react';

class TableLibrary extends React.Component {
	constructor(props) {
		super(props);
		this.maxRows =
			this.props.maxRows === undefined ? 10 : this.props.maxRows;

		this.numberOfObjects =
			this.props.numberOfObjects === undefined
				? this.countNumeberOfPages()
				: this.props.numberOfObjects;
		this.pageActual = 1;
		this.pointer = 1;
		this.isDataReactive = this.props.isDataReactive;
		this.onClickPaginator = this.props.onClickPaginator;
		this.overwriteHeader = this.props.overwriteHeader?this.props.overwriteHeader:new Map(); //Esto es un mapa
		this.idName =
			this.props.idName === undefined
				? 'tableDefault'
				: this.props.idName;
		this.className =
			this.props.className === undefined
				? 'table table-striped table-bordered'
				: this.props.className;

		this.onClickTr =
			typeof props.onClickTr === 'function'
				? props.onClickTr
				: () => {
						console.warn('need a function for onClickTr');
				  };
	}

	CreateTable() {
		if (this.props.data.length > 0) {
			var dataKeys = Object.keys(this.props.data[0]);
			return (
				<table className={this.className} id={this.idName}>
					<thead>
						{this.CreateTableHeader(
							this.isDataReactive
								? this.props.data
								: this.limitedRows(this.props.data),
							dataKeys
						)}
					</thead>
					<tbody>
						{this.CreateBody(
							this.isDataReactive
								? this.props.data
								: this.limitedRows(this.props.data),
							dataKeys
						)}
					</tbody>
				</table>
			);
		}
	}

	/**
	 * Crea la cabecera de las tablas en base a los datos que se le pasan
	 * @param {*} data
	 */
	CreateTableHeader(data, dataKeys) {
		if (typeof data === 'object') {
			var newTh = dataKeys.map((key) => {
				if (!this.props.skipHeader?.has(key)) {
					return (
						<th key={key}>
							{this.overwriteHeader.has(key)
								? this.overwriteHeader.get(key)
								: key}
						</th>
					);
				}
			});
			return (
				<tr>
					{this.AddHeaderExtra(this.props.headerExtraBefore)}
					{newTh}
					{this.AddHeaderExtra(this.props.headerExtraAfter)}
				</tr>
			);
		}
	}
	/**
	 * adiciona la cabecera extra en la tabla
	 * @param {objeto a adicionar a la cabecera} data
	 * @returns
	 */
	AddHeaderExtra(data) {
		if (typeof data === 'object') {
			var newTh = data.map((obj) => {
				let key = Object.keys(obj)[0];
				return <th key={key}>{key}</th>;
			});
			return newTh;
		}
	}

	countNumeberOfPages() {
		return Math.ceil(this.props.data.length / this.maxRows);
	}

	getNumberOfPages(numRows) {
		return Math.ceil(numRows / this.maxRows);
	}

	limitedRows(data) {
		var newData = [];
		var start = this.pointer * this.maxRows - this.maxRows;
		var end = this.pointer * this.maxRows;
		for (var i = start; i < end; i++) {
			if (data[i] !== undefined) {
				newData.push(data[i]);
			}
		}
		return newData;
	}

	/**
	 * A partir de un objeto JSON se crea el contenido de la tabla,
	 * tambien adiciona las columnas extras que vienen departe de
	 * HeaderExtraBefore y HeaderExtraAfter antes y despues del contenido
	 * original respectivamente
	 * @param {json a mostrar} data
	 * @param {claves json a mostrar} dataKeys
	 * @returns
	 */
	CreateBody(data, dataKeys) {
		var newTrs = data.map((obj, i) => {
			return (
				<tr
					key={i}
					onClick={() => {
						this.onClickTr(obj, i);
					}}
				>
					{this.addRowExtraAction(
						obj,
						i,
						this.props.headerExtraBefore
					)}
					{this.AddRow(i, data, dataKeys)}
					{this.addRowExtraAction(
						obj,
						i,
						this.props.headerExtraAfter
					)}
				</tr>
			);
		});
		return newTrs;
	}

	/**
	 * Crea una columna extra
	 * @param {json a adicionar} data
	 * @param {nro de fila actual} row
	 * @param {*} dataMap
	 * @returns
	 */
	addRowExtraAction(data, row, dataMap) {
		return dataMap?.map((key) => {
			let keyName = Object.keys(key)[0];
			return <td key={keyName}>{key[keyName](data, row)}</td>;
		});
	}

	AddRow(row, data, dataKeys) {
		var newTd = dataKeys?.map((key) => {
			if (!this.props.skipHeader?.has(key)) {
				return <td key={key}>{data[row][key]}</td>;
			}
		});

		return newTd;
	}

	shouldComponentUpdate(nextProps) {
		return true;
	}

	CreatePaginator(actualPage, totalPages) {
		let onclick = () => {
			if (this.onClickPaginator !== undefined) {
				this.onClickPaginator(
					this.maxRows,
					(actualPage - 1) * this.maxRows
				);
			}
			this.render();
			this.setState({});
			this.pointer = actualPage;
		};
		let styleSelected = {
			selected: { background: 'red' },
			unselected: { background: 'white' },
		};
		let button = (
			<button
				onClick={onclick}
				key={actualPage}
				style={
					this.pointer === actualPage
						? styleSelected.selected
						: styleSelected.unselected
				}
			>
				{actualPage}
			</button>
		);
		if (actualPage < totalPages) {
			if (
				actualPage < this.pointer + 2 ||
				actualPage === totalPages - 1
			) {
				return [
					button,
					this.CreatePaginator(actualPage + 1, totalPages),
				];
			} else if (actualPage === this.pointer + 2) {
				return [
					<h3 key={actualPage}>....</h3>,
					this.CreatePaginator(actualPage + 1, totalPages),
				];
			} else {
				return this.CreatePaginator(actualPage + 1, totalPages);
			}
		}
		return button;
	}

	resetActualPage() {
		this.actualPage = 1;
		this.pointer = 1;
	}

	render() {
		return (
			<div className={this.props.className + '-container'}>
				{this.CreateTable()}
				<div style={{ display: 'flex' }}>
					{this.CreatePaginator(
						this.pointer > 2 ? this.pointer - 2 : 1,
						this.props.numberOfObjects === undefined
							? this.countNumeberOfPages()
							: this.props.numberOfObjects
					)}
				</div>
			</div>
		);
	}
}

export default TableLibrary;
