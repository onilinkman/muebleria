import { render } from '@testing-library/react';
import React from 'react';

import add_photo from '../../../assets/icons/add_a_photo.svg';

export default class Panel extends React.Component {
	componentDidMount() {
		let date = document.getElementById('date-panel');
		date.value = new Date();
		console.log('dsd');
	}

	render() {
		const selectImage = () => {
			document.getElementById('capture-img').click();
		};
		const onSelectImg = (e) => {
			let file = e.target.files[0];
			if (file) {
				let reader = new FileReader();
				reader.onload = () => {
					document.getElementById('preview-img').src = reader.result;
				};
                reader.readAsDataURL(file)
			}
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
							/>
						</div>
						<div className="panel-input">
							<label htmlFor="firstname-panel">Apellidos:</label>
							<input
								type="text"
								id="firstname-panel"
								placeholder="Ingrese Apellido Paterno y Materno"
							/>
						</div>
						<div className="panel-input">
							<label htmlFor="ci-panel">
								Carnet de Identidad:
							</label>
							<input
								type="text"
								id="ci-panel"
								placeholder="Ingrese CI"
							/>
						</div>
						<div className="panel-input">
							<label htmlFor="date-panel">
								Fecha de Ingreso:
							</label>
							<input type="date" id="date-panel" />
						</div>
					</div>
					<div className="image-panel" onClick={selectImage}>
						<img
							value="add_photo"
							src={add_photo}
							id="preview-img"
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
			</div>
		);
	}
}
