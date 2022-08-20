import React from 'react';
import { Link } from 'react-router-dom';

import TableLibrary from '../../components/table/Table';
import Panel from './panelRegPersonal/panel';

import './AddPersonal.css';

class AddPersonal extends React.Component {
	render() {
		var dataTable = [
			{
				Ci: 833756421,
				'Apellidos y Nombres': 'MarbanCallisayaChristian',
			},
			{ Ci: 4564, 'Apellidos y Nombres': 'Ector' },
			{ Ci: 42123, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
			{ Ci: 213, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
			{ Ci: 1345, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
			{ Ci: 4575, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
			{ Ci: 120, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
			{ Ci: 77897, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
			{ Ci: 45645, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
			{ Ci: 454654, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
			{ Ci: 1454654, 'Apellidos y Nombres': 'agidn ajjbdfoa  iclzicgud' },
		];

		var skipHeader = new Map();

		return (
			<div className="personal-body">
				<Link className="btn-back" to="/">
					<p>Atras</p>
				</Link>
				<div className='content-table-panel'>
					<div className="table-personal">
						<TableLibrary
							data={dataTable}
							skipHeader={skipHeader}
							className="personal-table"
							idName="personal-table"
						/>
					</div>
					<Panel />
				</div>
			</div>
		);
	}
}

export default AddPersonal;
