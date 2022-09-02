import React, { useRef, useState } from 'react';

import ComboBox from '../../../components/ComboBox/ComboBox';

import add_photo from '../../../assets/icons/add_a_photo.svg';
import person_add from '../../../assets/icons/person_add_black_24dp.svg';
import edit_48 from '../../../assets/icons/edit_48.svg';
import check_48 from '../../../assets/icons/check_48.svg';
import cancel_48 from '../../../assets/icons/cancel_48.svg';

export default function Panel(props) {
	const [isDisabled, setIsDisabled] = useState(true);
	const [styleBtnsOptions, setStyleBtnsOptions] = useState({
		display: 'flex',
	});

	//Buttons ref
	const inputName = useRef(null);
	const inputFirstName = useRef(null);
	const inputCi = useRef(null);

	const imgPreview = useRef(null);
	const btnsOptions = useRef(null);

	const selectImage = () => {
		document.getElementById('capture-img').click();
	};
	var file;
	const onSelectImg = (e) => {
		file = e.target.files[0];
		if (file) {
			let reader = new FileReader();
			reader.onload = () => {
				imgPreview.current.src = reader.result;
			};
			reader.readAsDataURL(file);
		}
	};

	const enableDisabledInputs = () => {
		setIsDisabled(!isDisabled);
		setStyleBtnsOptions({ display: 'none' });
	};

	const clearInputs = () => {
		inputName.current.value = '';
		inputFirstName.current.value = '';
		inputCi.current.value = '';
		imgPreview.current.src = add_photo;
		file = null;
	};

	return (
		<div className="body-panel">
			<div className="panel-content">
				<div className="data-content-panel">
					<div className="panel-input">
						<label htmlFor="name-panel">Nombres:</label>
						<input
							type="text"
							id="name-panel"
							placeholder="Ingrese Nombres"
							ref={inputName}
							disabled={isDisabled}
						/>
					</div>
					<div className="panel-input">
						<label htmlFor="firstname-panel">Apellidos:</label>
						<input
							type="text"
							id="firstname-panel"
							placeholder="Ingrese Apellido Paterno y Materno"
							ref={inputFirstName}
							disabled={isDisabled}
						/>
					</div>
					<div className="panel-input">
						<label htmlFor="ci-panel">Carnet de Identidad:</label>
						<input
							type="text"
							id="ci-panel"
							placeholder="Ingrese CI"
							ref={inputCi}
							disabled={isDisabled}
						/>
					</div>
					<div className="panel-input">
						<label htmlFor="date-panel">Fecha de Ingreso:</label>
						<input
							type="date"
							id="date-panel"
							disabled={isDisabled}
						/>
					</div>
					<div className="panel-input">
						<ComboBox
							id_name="List_shop"
							description="Deposito/Tienda:"
							list={['eloy Salmon', 'Av Eduardo Avaroa']}
						/>
					</div>
				</div>
				<div className="image-panel" onClick={selectImage}>
					<img
						value="add_photo"
						src={add_photo}
						id="preview-img"
						ref={imgPreview}
					></img>
				</div>
				<input
					id="capture-img"
					type="file"
					accept="image/*;capture=camera"
					src={add_photo}
					onChange={onSelectImg}
				/>
			</div>
			<div className="btn-panel">
				<div
					className="btns-options"
					ref={btnsOptions}
					style={styleBtnsOptions}
				>
					<button
						className="btn-confirm btns-action-efect"
						onClick={enableDisabledInputs}
					>
						<img
							className="icon_personal"
							alt="add_person"
							src={person_add}
						></img>
						Registrar
					</button>
					<button className="edit-personal btns-action-efect" onClick={clearInputs}>
						<img
							className="icon_personal"
							alt="edit_person"
							src={edit_48}
						></img>
						Editar
					</button>
				</div>
				<div className="btns-action-register">
					<button className="btn-confirm btns-action-efect">
						<img
							className="icon_check"
							alt="check"
							src={check_48}
						></img>
						CONFIRMAR REGISTRO
					</button>
					<button className="btn-cancel btns-action-efect">
						<img
							className="icon_cancel"
							alt="cancel"
							src={cancel_48}
						></img>
						CANCELAR
					</button>
				</div>
			</div>
		</div>
	);
}
