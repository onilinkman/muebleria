import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import ButtonAction from '../../components/Buttons/ButtonAction';
import TableLibrary from '../../components/table/Table';
import Modal from '../../components/modal/modal';
import Rol from './Rol';

import Config from '../../config.json';

export default function Storage() {
	var [dataTable, setDataTable] = useState([]);
	var [dataNumberObjects, setDataNumberObjects] = useState(1);

	var headers = {
		Accept: '*/*',
		'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
		'Content-Type': 'application/json',
	};

	const refInputName = useRef(null);
	const refInputAddress = useRef(null);
	const refTable = useRef(null);

	var skipHeader = new Map();
	skipHeader.set('active', 'active');
	skipHeader.set('mount', 'mount');
	var overwriteHeader = new Map();
	overwriteHeader.set('id_store', 'ID');
	overwriteHeader.set('name', 'Nombre del Deposito/Tienda');
	overwriteHeader.set('address', 'Direccion');

	var callFetchWithData = (mount, from) => {
		fetch(Config.dir_urls + Config.api_urls.getAllStoreAndMount, {
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
				setDataNumberObjects(
					refTable.current.getNumberOfPages(data.data[0].mount)
				);
				refTable.current.resetActualPage();
			})
			.catch((err) => console.log(err));
	};

	var callFetch=(mount,from)=>{
		fetch(Config.dir_urls + Config.api_urls.getAllStoreAndMount, {
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
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		callFetchWithData(10, 0);
	}, []);
	return (
		<div className="content-grid-100">
			<div>
				<Link className='btn-dmg-toon' to="/MenuInventory">Volver</Link>
			</div>
			<div className="flex-space-around-100">
				<div className="table-content">
					<TableLibrary
						data={dataTable}
						skipHeader={skipHeader}
						className="library-table"
						idName="Storage-table"
						maxRows={10}
						ref={refTable}
						overwriteHeader={overwriteHeader}
						isDataReactive={true}
						numberOfObjects={dataNumberObjects}
						onClickPaginator={(mount,from)=>{
							callFetch(mount,from)
						}}
					/>
				</div>
				<div className="content-backdrop content-grid-100">
					<div className="data-input-content">
						<label htmlFor="input-name">
							Nombre del Deposito/Tienda:
						</label>
						<input
							className="text-input-play"
							id="input-name"
							ref={refInputName}
						></input>
					</div>
					<div className="data-input-content">
						<label htmlFor="input-address">
							Direccion del Deposito/Tienda:
						</label>
						<input
							className="text-input-play"
							id="input-address"
							ref={refInputAddress}
						></input>
					</div>
					<div className="flex-space-around-100">
						<ButtonAction
							text={'AGREGAR'}
							onClick={() => {
								let name = refInputName.current.value.trim();
								let address =
									refInputAddress.current.value.trim();
								if (name !== '' && address !== '') {
									fetch(
										Config.dir_urls +
											Config.api_urls.addStore,
										{
											headers: headers,
											method: 'POST',
											body: JSON.stringify({
												name: name,
												address: address,
											}),
										}
									)
										.then((response) => {
											refInputName.current.value = '';
											refInputAddress.current.value = '';
											callFetchWithData(10, 0);
										})
										.catch((err) => {
											console.log('error: ' + err);
										});
								} else {
									alert('debe llenar todos los campos');
								}
							}}
							styleNro={0}
						/>
						<ButtonAction
							text={'ELIMINAR'}
							onClick={() => {}}
							styleNro={2}
						/>
					</div>
				</div>
			</div>
			<div className="flex-space-around-100">
				<Modal description={'Agregar Roles'}>
					<Rol />
				</Modal>
			</div>
		</div>
	);
}
