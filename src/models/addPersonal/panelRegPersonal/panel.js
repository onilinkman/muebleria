import React, { useRef, useState } from 'react';

import ComboBox from '../../../components/ComboBox/ComboBox';
import BtnImg from '../../../components/BtnImg/BtnImg';


import person_add from '../../../assets/icons/person_add_black_24dp.svg';
import edit_48 from '../../../assets/icons/edit_48.svg';
import check_48 from '../../../assets/icons/check_48.svg';
import cancel_48 from '../../../assets/icons/cancel_48.svg';

export default function Panel(props) {
	const [isDisabled, setIsDisabled] = useState(true);
	const [styleBtnsOptions, setStyleBtnsOptions] = useState({
		display: 'flex',
	});
	const [styleBtnsActions, setStyleBtnsActions] = useState({
		display: 'none',
	});
	const [styleBtnsEdit, setStyleBtnsEdit] = useState({
		display: 'none',
	});

	//Buttons ref
	const inputName = useRef(null);
	const inputFirstName = useRef(null);
	const inputCi = useRef(null);

	
	const btnsOptions = useRef(null);
	const actionRegister = useRef(null);
	const btnImage=useRef(null)
	

	const enableInputs = () => {
		setIsDisabled(false);
		setStyleBtnsOptions({ display: 'none' });
		setStyleBtnsActions({ display: 'flex' });
	};

	const clearInputs = () => {
		inputName.current.value = '';
		inputFirstName.current.value = '';
		inputCi.current.value = '';
		btnImage.current.RestaurePhoto();
	};

	const hiddenBtnsAction = () => {
		setIsDisabled(true);
		setStyleBtnsActions({ display: 'none' });
		setStyleBtnsEdit({ display: 'none' });
		setStyleBtnsOptions({ display: 'flex' });
		clearInputs();
	};

	const enableEdit = () => {
		setIsDisabled(false);
		setStyleBtnsOptions({ display: 'none' });
		setStyleBtnsEdit({ display: 'flex' });
		clearInputs();
	};

	const ConfirmEdit = () => {
		setIsDisabled(true);
		setStyleBtnsEdit({ display: 'none' });
		setStyleBtnsOptions({ display: 'flex' });
		clearInputs();
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
							autoComplete="off"
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
							autoComplete="off"
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
							autoComplete="off"
						/>
					</div>
					<div className="panel-input">
						<label htmlFor="date-panel">Fecha de Ingreso:</label>
						<input
							type="date"
							id="date-panel"
							disabled={isDisabled}
							autoComplete="off"
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
				<BtnImg ref={btnImage}/>
				
			</div>
			<div className="btn-panel">
				<div
					className="btns-options"
					ref={btnsOptions}
					style={styleBtnsOptions}
				>
					<button
						className="btn-confirm btns-action-efect"
						onClick={enableInputs}
					>
						<img
							className="icon_personal"
							alt="add_person"
							src={person_add}
						></img>
						Registrar
					</button>
					<button
						className="edit-personal btns-action-efect"
						onClick={enableEdit}
					>
						<img
							className="icon_personal"
							alt="edit_person"
							src={edit_48}
						></img>
						Editar
					</button>
				</div>
				<div
					className="btns-action-register"
					ref={actionRegister}
					style={styleBtnsActions}
				>
					<button
						className="btn-confirm btns-action-efect"
						onClick={hiddenBtnsAction}
					>
						<img
							className="icon_check"
							alt="check"
							src={check_48}
						></img>
						CONFIRMAR REGISTRO
					</button>
					<button
						className="btn-cancel btns-action-efect"
						onClick={hiddenBtnsAction}
					>
						<img
							className="icon_cancel"
							alt="cancel"
							src={cancel_48}
						></img>
						CANCELAR
					</button>
				</div>
				<div className="btns-edit-personal" style={styleBtnsEdit}>
					<button
						className="btn-confirm btns-action-efect"
						onClick={ConfirmEdit}
					>
						<img
							className="icon_check"
							alt="check"
							src={check_48}
						></img>
						ACEPTAR EDICION
					</button>
					<button
						className="btn-cancel btns-action-efect"
						onClick={hiddenBtnsAction}
					>
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
