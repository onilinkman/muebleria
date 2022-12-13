import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import ProductData from './ProductData/ProductData';
import EditData from './EditData/EditData';
import AddSubProduct from './AddSubProduct/AddSubProduct';
import ButtonAction from '../../components/Buttons/ButtonAction';

export default function ItemList(props) {
	const [element, setElement] = useState(() => {
		return <ProductData isDisable={true} />;
	});

	var refFirstData = useRef(null);

	var firstData;

	return (
		<div className="Body-ItemList flex-column">
			<div>
				<Link to="/MenuInventory">Volver</Link>
			</div>
			<div className="content-grid-100 ">
				<div className="content-data flex-space-around">
					{/* <ProductData/> */}
					{element}
					{/* <AddSubProduct /> */}
				</div>
				<div className="content-actions flex-space-around flex-space-evenly">
					<div className="content-grid-100">
						<div className="flex-space-around">
							<ButtonAction
								styleNro={0}
								text={'Empezar a Ingresar'}
								onClick={() => {
									setElement(() => {
										return (
											<EditData
												cancel={() => {
													setElement(() => {
														return (
															<ProductData
																isDisable={true}
															/>
														);
													});
												}}
												getData={() => {
													firstData =
														refFirstData.current.createJson();
													setElement(() => {
														return (
															<AddSubProduct />
														);
													});
													console.log(firstData)
												}}
												ref={refFirstData}
											/>
										);
									});
								}}
							/>
						</div>
						<div className="flex-space-around">
							<ButtonAction
								styleNro={1}
								text={'Editar'}
								onClick={() => {}}
							/>
							<ButtonAction
								styleNro={2}
								text={'Eliminar'}
								onClick={() => {}}
							/>
						</div>
					</div>
					<div className="content-grid-100">
						<div className="flex-space-around">
							<ButtonAction
								styleNro={2}
								text={'Agregar Proveedor'}
								onClick={() => {}}
							/>
						</div>
						<div className="flex-space-around">
							<ButtonAction
								styleNro={2}
								text={'Agregar Tipo'}
								onClick={() => {}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
