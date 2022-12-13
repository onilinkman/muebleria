import { Link } from 'react-router-dom';

import TableLibrary from '../../components/table/Table';
import DetailShop from './detailShop/DetailShop';
import ButtonAction from '../../components/Buttons/ButtonAction';

import './ShopMenu.css';
import '../../components/table/tableFormal.css';

export default function ShopMenu(props) {
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
		<div className="content-grid-100 ">
			<Link className="btn-back" to="/">
				<p>Atras</p>
			</Link>
			<div className="list-data-item flex-space-around">
				<div className="table-content">
					<TableLibrary
						data={dataTable}
						skipHeader={skipHeader}
						className="library-table"
						idName="shop-item-table"
					/>
				</div>
				<DetailShop />
			</div>
			<div className="list-to-buy flex-space-around">
				<TableLibrary
					data={dataTable}
					skipHeader={skipHeader}
					className="library-table"
					idName="shop-to-buy"
					maxRows={5}
					onClickTr={(obj,i)=>{console.log(obj,i)}}
				/>
			</div>
			<div className="actions-shop-menu flex-space-around">
				<ButtonAction onClick={()=>{}} styleNro={1} text={"REGISTRAR Y GUARDAR"}/>
				<ButtonAction onClick={()=>{}} styleNro={2} text={"ELIMINAR"}/>
				
			</div>
		</div>
	);
}
