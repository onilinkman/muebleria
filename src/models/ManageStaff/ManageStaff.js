import React from 'react';
import { Link } from 'react-router-dom';

import PanelHour from './PanelHour/PanelHour';
import SelectStaff from './SelectStaff/SelectStaff';
import PanelAddNote from './PanelAddNote/PanelAddNote';
import TableLibrary from '../../components/table/Table';

export default function ManageStaff(props) {
	var ListStaff = ['persona 1', 'persona 2'];

	var dataTable = [
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2010',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'NO',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '26/2/2022',
			'Hora Entrada': '18:59',
			'Hora Salida': '21:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.1%',
			Nota: 'Tiene Fala',
		},
		{
			fecha: '2/2/2019',
			'Hora Entrada': '18:59',
			'Hora Salida': '20:00',
			Falta: 'Si',
			Descuento: '1.2%',
			Nota: 'Tiene Fala',
		},
	];

	var skipHeader = new Map();

	return (
		<div className="body-manage-staff">
			<Link className="btn-back" to="/">
				<p>Atras</p>
			</Link>
			<div className="content-body-panel">
				<div className="control-hour">
					<SelectStaff list={ListStaff} />
					<PanelHour />
					<PanelAddNote />
				</div>
			</div>
			<div className="table-content-staff" id="table-content-staff">
				<TableLibrary
					data={dataTable}
					skipHeader={skipHeader}
					className="staff-table"
					idName="staff-table"
				/>
			</div>
		</div>
	);
}
