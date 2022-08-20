import React from 'react';
import { Link } from 'react-router-dom';

import './mainMenu.css';
import add_person_w from '../../assets/icons/person_add_black_24dp.svg';
import manage_accounts from '../../assets/icons/manage_accounts_white_24dp.svg';
import point_of_sale from '../../assets/icons/point_of_sale_white_24dp.svg';
import group_add from '../../assets/icons/group_add_white_24dp.svg';
import inventory from '../../assets/icons/inventory_white_24dp.svg';
import analytics from '../../assets/icons/analytics_white_24dp.svg';


class MainMenu extends React.Component {
	render() {
		var whiteColor = {
			filter: 'invert(99%) sepia(0%) saturate(7496%) hue-rotate(168deg) brightness(103%) contrast(101%)',
		};

		return (
			<div className="body-menu">
				<Link className="btn-to-modal" to="/addPersonal">
					<img
						alt="add_personal"
						src={add_person_w}
						style={whiteColor}
					/>
					<p>REGISTRO DEL PERSONAL</p>
				</Link>
				<Link className="btn-to-modal" to="/">
					<img alt="manage_accounts" src={manage_accounts} />
					<p>CONTROL DEL PERSONAL</p>
				</Link>
				<Link className="btn-to-modal" to="/">
					<img alt="point_of_sale" src={point_of_sale} />
					<p>VENTA POR MENOR</p>
				</Link>
				<Link className="btn-to-modal" to="/">
					<img alt='"group_add' src={group_add} />
					<p>AGREGAR CLIENTES</p>
				</Link>
				<Link className="btn-to-modal" to="/">
					<img alt="inventory" src={inventory} />
					<p>INVENTARIO Y GASTOS</p>
				</Link>
				<Link className="btn-to-modal" to="/">
					<img alt="analytics" src={analytics} />
					<p>GESTION</p>
				</Link>
			</div>
		);
	}
}

export default MainMenu;
