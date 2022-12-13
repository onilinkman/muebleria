import React from 'react';
import ButtonAction from '../../components/Buttons/ButtonAction';
import TableLibrary from '../../components/table/Table';

export default function Rol(props) {
	var dataTable = [
		{ name: 'zagarnaga', address: 'Bilbao la vieja' },
		{
			name: 'esto',
			address: 'sdfsdf av ads234',
		},
		{
			name: 'esto',
			address: 'sdfsdf av ads234',
		},
		{
			name: 'esto',
			address: 'sdfsdf av ads234',
		},
		{
			name: 'esto',
			address: 'sdfsdf av ads234',
		},
		{
			name: 'esto',
			address: 'sdfsdf av ads234',
		},
		
	];

	var skipHeader = new Map();
	return (
		<React.Fragment>
			<h2 className="text-title">Agregar Roles</h2>
			<div className="flex-column flex-align-center">
				<div className="data-input-content">
					<label htmlFor="input-rol_name">Ingrese el Rol</label>
					<input id="input-rol_name" className="text-input-play" />
				</div>
				<ButtonAction
					text={'AGREGAR ROL'}
					onClick={() => {}}
					styleNro={1}
				/>
				<TableLibrary
					data={dataTable}
					skipHeader={skipHeader}
					className="library-table"
					idName="Storage-table"
					maxRows={2}
				/>
			</div>
		</React.Fragment>
	);
}
