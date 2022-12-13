import ButtonAction from '../../components/Buttons/ButtonAction';
import TableLibrary from '../../components/table/Table';
import Modal from '../../components/modal/modal';
import Rol from './Rol';

export default function Storage() {
	var dataTable = [
		{ name: 'zagarnaga', address: 'Bilbao la vieja' },
		{
			name: 'esto',
			address: 'sdfsdf av ads234',
		},
	];

	var skipHeader = new Map();
	return (
		<div className="content-grid-100">
			<div className="flex-space-around-100">
				<div className="table-content">
					<TableLibrary
						data={dataTable}
						skipHeader={skipHeader}
						className="library-table"
						idName="Storage-table"
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
						></input>
					</div>
					<div className="data-input-content">
						<label htmlFor="input-address">
							Direccion del Deposito/Tienda:
						</label>
						<input
							className="text-input-play"
							id="input-address"
						></input>
					</div>
					<div className="flex-space-around-100">
						<ButtonAction
							text={'AGREGAR'}
							onClick={() => {}}
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
					<Rol/>
				</Modal>
			</div>
		</div>
	);
}
