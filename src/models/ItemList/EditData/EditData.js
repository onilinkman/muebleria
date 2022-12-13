import ComboBox from '../../../components/ComboBox/ComboBox';
import ButtonAction from '../../../components/Buttons/ButtonAction';
import React, { useImperativeHandle } from 'react';

/**
 * getData send a function
 * @param {*} props
 * @returns
 */
function EditData(props, ref) {
	var listSuppliers = ['Santos Andira', 'Carraro'];

	var jsonData;

	const createJson = () => {
		let inputName = document.getElementById('inputName');
		let inputCode = document.getElementById('inputCode');
		let inputBrand = document.getElementById('inputBrand');
		let inputDimension = document.getElementById('inputDimension');
		let inputComboBox = document.getElementById('input_supplier');
		let inputType = document.getElementById('inputType');
		let inputProcentage = document.getElementById('inputPorcentage');
		let inputNote = document.getElementById('inputNote');
		return (jsonData = {
			inputName: inputName.value,
			inputCode: inputCode.value,
			inputBrand: inputBrand.value,
			inputDimension: inputDimension.value,
			inputComboBox: listSuppliers[inputComboBox.selectedIndex],
			inputType: inputType.value,
			inputProcentage: inputProcentage.value,
			inputNote: inputNote.value,
		});
	};

	useImperativeHandle(ref, () => ({
		createJson,
	}));

	return (
		<div className="content-grid-100">
			<div className="data-input-content">
				<label htmlFor="inputName">Nombre:</label>
				<input className="text-input-play" id="inputName" />
			</div>
			<div className="data-input-content">
				<label htmlFor="inputCode">Codigo:</label>
				<input className="text-input-play" id="inputCode" />
			</div>
			<div className="data-input-content">
				<label htmlFor="inputBrand">Marca:</label>
				<input className="text-input-play" id="inputBrand" />
			</div>
			<div className="data-input-content">
				<label htmlFor="inputDimension">Dimension:</label>
				<input className="text-input-play" id="inputDimension" />
			</div>
			<div className="data-input-content">
				<ComboBox
					id_name="input_supplier"
					description="Proveedor:"
					list={listSuppliers}
				/>
			</div>
			<div className="data-input-content">
				<label htmlFor="inputType">Tipo:</label>
				<input className="text-input-play" id="inputType" />
			</div>
			<div className="data-input-content">
				<label htmlFor="inputPorcentage">Porcentaje %:</label>
				<input className="text-input-play" id="inputPorcentage" />
			</div>
			<div className="data-input-content">
				<label htmlFor="inputNote">Nota:</label>
				<textarea id="inputNote"></textarea>
			</div>
			<div className="data-input-content">
				<ButtonAction
					onClick={props.cancel}
					styleNro={2}
					text={'Cancelar'}
				/>
				<ButtonAction
					onClick={props.getData}
					styleNro={0}
					text={'Siguiente'}
				/>
			</div>
		</div>
	);
}
export default React.forwardRef(EditData);
