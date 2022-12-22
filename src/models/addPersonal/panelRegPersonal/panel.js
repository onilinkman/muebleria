import React, { useEffect, useRef, useImperativeHandle, useState } from 'react';

import ComboBox from '../../../components/ComboBox/ComboBox';
import BtnImg from '../../../components/BtnImg/BtnImg';

import person_add from '../../../assets/icons/person_add_black_24dp.svg';
import edit_48 from '../../../assets/icons/edit_48.svg';
import check_48 from '../../../assets/icons/check_48.svg';
import cancel_48 from '../../../assets/icons/cancel_48.svg';

import config from '../../../config.json';

function Panel(props, ref) {
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

	var [objSelectedInTable,setObjSelectedInTable]=useState(null);

	//Buttons ref
	const inputName = useRef(null);
	const inputLastName = useRef(null);
	const inputCi = useRef(null);
	const refInputDate = useRef(null);

	const btnsOptions = useRef(null);
	const actionRegister = useRef(null);
	const btnImage = useRef(null);

	const enableInputs = () => {
		setIsDisabled(false);
		setStyleBtnsOptions({ display: 'none' });
		setStyleBtnsActions({ display: 'flex' });
	};

	const clearInputs = () => {
		inputName.current.value = '';
		inputLastName.current.value = '';
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
	};

	const ConfirmEdit = () => {
		setIsDisabled(true);
		setStyleBtnsEdit({ display: 'none' });
		setStyleBtnsOptions({ display: 'flex' });
		clearInputs();
	};

	const SendDataPost = () => {
		fetch(config.dir_urls + config.api_urls.addPersonal, {
			headers: config.headers_api,
			method: 'POST',
			body: JSON.stringify({
				name: inputName.current.value.trim(),
				lastname: inputLastName.current.value.trim(),
				ci: inputCi.current.value.trim(),
				url_image: btnImage.current.GetByteImage(),
				date: refInputDate.current.value,
			}),
		})
			.then((response) => {
				console.log('Se registro correctamente');
				hiddenBtnsAction();
				props.onPostData();
			})
			.catch((err) => {
				console.log(err);
				alert('Error al registrar');
			});
	};

	const getTodayDate = () => {
		refInputDate.current.valueAsDate = new Date();
	};

	useEffect(() => {
		getTodayDate();
	}, []);

	const setInputs = (name, lastname, ci, date, url_image, obj) => {
		inputName.current.value = name;
		inputLastName.current.value = lastname;
		inputCi.current.value = ci;
		refInputDate.current.valueAsDate = new Date(date);
		btnImage.current.SetSrc(url_image);
		setObjSelectedInTable(obj)
	};

	useImperativeHandle(ref, () => ({
		setInputs,
	}));

	const putPersonal = () => {
		fetch(config.dir_urls + config.api_urls.putPersonalById, {
			headers: config.headers_api,
			method: 'PUT',
			body: JSON.stringify({
				id_personal: objSelectedInTable.id_personal,
				name: inputName.current.value.trim(),
				lastname: inputLastName.current.value.trim(),
				ci: inputCi.current.value.trim(),
				url_image: btnImage.current.GetByteImage(),
				date: refInputDate.current.value,
			}),
		})
			.then((response) => {
				ConfirmEdit();
			})
			.catch((err) => {
				console.log(err);
				alert('no se puso guardar los cambios');
			});
	};

	const putPersonalWithoutImg = () => {
		fetch(config.dir_urls + config.api_urls.putPersonalByIdWithoutImage, {
			headers: config.headers_api,
			method: 'PUT',
			body: JSON.stringify({
				id_personal: objSelectedInTable.id_personal,
				name: inputName.current.value.trim(),
				lastname: inputLastName.current.value.trim(),
				ci: inputCi.current.value.trim(),
				date: refInputDate.current.value,
			}),
		})
			.then((response) => {
				ConfirmEdit();
			})
			.catch((err) => {
				console.log(err);
				alert('no se puso guardar los cambios');
			});
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
							ref={inputLastName}
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
							ref={refInputDate}
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
				<BtnImg ref={btnImage} />
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
						onClick={() => {
							console.log(btnImage.current.isSrcBase64Image());
							enableEdit();
						}}
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
						onClick={SendDataPost}
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
						onClick={() => {
							if (btnImage.current.isSrcBase64Image()) {
								putPersonal();
							}else{
								putPersonalWithoutImg();
							}
						}}
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

export default React.forwardRef(Panel);
