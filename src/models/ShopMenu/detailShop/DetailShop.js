import BtnImg from '../../../components/BtnImg/BtnImg';
import Data1 from './Data1/Data1';
import Data2 from './Data2/Data2';
import ButtonAction from '../../../components/Buttons/ButtonAction';

import './DetailShop.css';

export default function DetailShop(props) {
	const TEXTAREA_NAME = 'text_area_name';
	const TEXTAREA_ID = 'text_area_id';
	return (
		<div className="content-detail-item">
			<h2>Datos Del Producto</h2>
			<div className="content-data-elements flex-space-around">
				<div className="shop-photo-note">
					<BtnImg />
					<div className="textarea-shop">
						<label htmlFor={TEXTAREA_ID}>NOTA:</label>
						<textarea id={TEXTAREA_ID}></textarea>
					</div>
				</div>
				<div className="shop-data-item flex-space-around">
					<div className="shop-data-1">
						<Data1 />
					</div>
					<div className="shop-data-2">
						<Data2 />
					</div>
				</div>
			</div>
			<div className="flex-space-around">
				<ButtonAction
					onClick={() => {
						console.log('hola');
					}}
					styleNro={0}
					text={'Agregar Venta'}
				/>
				<div className='data-input-content shop-data-item '>
					<label htmlFor='total-price'>Total:</label>
					<input type={'number'} disabled></input>
				</div>
			</div>

		</div>
	);
}
