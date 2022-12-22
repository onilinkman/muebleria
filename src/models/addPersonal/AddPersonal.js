import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import TableLibrary from '../../components/table/Table';
import Panel from './panelRegPersonal/panel';
import config from '../../config.json';

import './AddPersonal.css';

export default function AddPersonal(props) {
	var refTable = useRef(null);
	var refPanel = useRef(null);

	var [dataTable, setDataTable] = useState([]);
	var [dataNumberObjects, setDataNumberObjects] = useState(0);

	var skipHeader = new Map();
	skipHeader.set('id_personal', 'id_personal');

	const callDataMount = (mount, from) => {
		fetch(config.dir_urls + config.api_urls.getPersonalsMount, {
			headers: config.headers_api,
			method: 'PUT',
			body: JSON.stringify({
				mount: mount,
				from: from,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setDataTable(data.data);
				setDataNumberObjects(
					refTable.current.getNumberOfPages(data.data[0].mount)
				);
				refTable.current.resetActualPage();
			})
			.catch((err) => {
				console.log(err);
				alert('no se pudo obtener los datos');
			});
	};

	const callData = (mount, from) => {
		fetch(config.dir_urls + config.api_urls.getPersonals, {
			headers: config.headers_api,
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
			.catch((err) => {
				console.log(err);
				alert('no se pudo obtener los datos');
			});
	};

	useEffect(() => {
		callDataMount(10, 0);
	}, []);

	return (
		<div className=".flex-column">
			<Link className="btn-back" to="/">
				<p>Atras</p>
			</Link>
			<div className="flex-space-around-100">
				<Panel
					ref={refPanel}
					onPostData={() => {
						callDataMount(10, 0);
					}}
				/>
				<div className="table-content">
					<TableLibrary
						data={dataTable}
						skipHeader={skipHeader}
						className="library-table"
						idName="personal-table"
						maxRow={10}
						ref={refTable}
						isDataReactive={true}
						numberOfObjects={dataNumberObjects}
						overwriteHeader={skipHeader}
						onClickPaginator={(mount, from) => {
							callData(mount, from);
						}}
						onClickTr={(obj, i) => {
							refPanel.current.setInputs(
								obj.name,
								obj.lastname,
								obj.ci,
								obj.date,
								config.dir_urls +
									config.static.personal +
									obj.url_image,
								obj
							);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
