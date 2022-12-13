import BtnImg from '../../../components/BtnImg/BtnImg';
import ComboBox from '../../../components/ComboBox/ComboBox';
import ButtonAction from '../../../components/Buttons/ButtonAction';

export default function AddSubProduct(props) {
	var listColor = ['Santos Andira', 'Carraro'];
	return (
		<div className="flex-space-around">
			<div className="content-grid-100">
				<BtnImg />
			</div>
			<div className="content-grid-100">
				<h1 className="text-title">Agregar un nuevo Color</h1>
				<div className="data-input-content">
					<label htmlFor="inputNameColor">Nombre del Color:</label>
					<input className="text-input-play" id="inputNameColor" />
				</div>
				<div className="data-input-content">


					<ButtonAction
						styleNro={1}
						text={'Agregar Color'}
						onClick={() => {}}
					/>

				</div>

				<h1 className="text-title">Modificar colores Agregados</h1>

				<div className="flex-column flex-align-center content-backdrop">
					<div className="data-input-content">
						<ComboBox
							id_name="input_supplier"
							description="Seleccione Color:"
							list={listColor}
						/>
					</div>
					<h3 className="text-label-play text-input-play">
						Para color seleccionado:
					</h3>
					<ButtonAction
						styleNro={3}
						text={'Eliminar Color'}
						onClick={() => {}}
					/>
					<ButtonAction
						styleNro={4}
						text={'Editar Color'}
						onClick={() => {}}
					/>
				</div>

				<div className="data-input-content">
					<ButtonAction
						styleNro={2}
						text={'Atras'}
						onClick={() => {}}
					/>

					<ButtonAction
						styleNro={0}
						text={'Finalizar Registro'}
						onClick={() => {}}
					/>
				</div>
			</div>
		</div>
	);
}
