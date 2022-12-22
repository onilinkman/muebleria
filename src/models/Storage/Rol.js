import React, { useEffect, useRef, useState } from 'react';
import ButtonAction from '../../components/Buttons/ButtonAction';
import TableLibrary from '../../components/table/Table';
import Config from '../../config.json';

export default function Rol(props) {
	var [dataTable, setDataTable] = useState([]);
	var [dataNumberObjects, setDataNumberObjects] = useState(1);
	var refTable = useRef(null);
	var refInputRol = useRef(null);
	var headers = {
		Accept: '*/*',
		'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
		'Content-Type': 'application/json',
	};

	var overwriteHeader=new Map();
	overwriteHeader.set("id_rol","ID");
	overwriteHeader.set("nombre","Rol")

	var callFetch = (mount, from) => {
		fetch(Config.dir_urls+Config.api_urls.getRols, {
			headers: headers,
			method: 'PUT',
			body: JSON.stringify({
				mount: mount,
				from: from,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setDataTable(data.data);
			})
			.catch((err) => console.log('error: ', err));
	};

	var callFetchWhitData = (mount, from) => {
		fetch(Config.dir_urls+Config.api_urls.getRolsData, {
			headers: headers,
			method: 'PUT',
			body: JSON.stringify({
				mount: mount,
				from: from,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				refTable.current.resetActualPage();
				setDataNumberObjects(
					refTable.current.getNumberOfPages(data.data[0].Mount)
				);
				setDataTable(data.data);
			})
			.catch((err) => {
				console.log('error: ', err);
			});
	};

	useEffect(() => {
		callFetchWhitData(5, 0);
	}, []); //El [] es para asegurar que no se recargara una y otra vez lo que se llama

	var skipHeader = new Map();
	skipHeader.set('Mount', 'Mount');
	skipHeader.set('From', 'From');

	var headerExtraAfter = [
		{
			Eliminar: (data, index) => {
				return (
					<ButtonAction
						styleNro={5}
						text={'Eliminar'}
						onClick={(event) => {
							if(window.confirm("Desea eliminar este Rol?")){

								fetch(Config.dir_urls+Config.api_urls.deleteRol, {
									headers: headers,
									method: 'DELETE',
									body: JSON.stringify({
										id_rol: data.id_rol,
									}),
								})
									.then((response) => {
										alert("Se elimino correctamente")
										callFetchWhitData(5, 0);
									})
									.catch((err) => {
										console.error('error:', err);
										alert('No se pudo eliminar el elemento');
									});
							}
							event.stopPropagation(); //para que ignore el onClick de Tr
						}}
					/>
				);
			},
		},
	];

	return (
		<React.Fragment>
			<h2 className="text-title">Agregar Roles</h2>
			<div className="flex-column flex-align-center">
				<div className="data-input-content">
					<label htmlFor="input-rol_name">Ingrese el Rol</label>
					<input
						id="input-rol_name"
						className="text-input-play"
						ref={refInputRol}
					/>
				</div>
				<ButtonAction
					text={'AGREGAR ROL'}
					onClick={() => {
						if (refInputRol.current.value != '') {
							fetch(Config.dir_urls+Config.api_urls.addRol, {
								headers: headers,
								method: 'POST',
								body: JSON.stringify({
									nombre: refInputRol.current.value.trim(),
								}),
							})
								.then((data) => {
									callFetchWhitData(5, 0);
									refInputRol.current.value = '';
								})
								.catch((error) => {
									console.log('err', error);
								});
						} else {
							alert('No puede agregar datos vacios a Rol');
						}
					}}
					styleNro={1}
				/>
				<TableLibrary
					data={dataTable}
					skipHeader={skipHeader}
					className="library-table"
					idName="Storage-table"
					maxRows={5}
					overwriteHeader={overwriteHeader}
					headerExtraAfter={headerExtraAfter}
					/*this need add for active mode reactive and use useState*/
					ref={refTable}
					isDataReactive={true}
					numberOfObjects={dataNumberObjects}
					onClickPaginator={(mount, from) => {
						callFetch(mount, from);
					}}
				/>
			</div>
		</React.Fragment>
	);
}
