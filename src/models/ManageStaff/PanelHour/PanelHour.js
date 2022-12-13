import React, { useRef } from 'react';

import './PanelHour.css';

export default class PanelHour extends React.Component {
	render() {
		const getInputTime = () => {
			let date = new Date();
			return date.getHours() + ':' + date.getMinutes();
		};

		return (
			<div className="content-panel-hour">
				<div className="content-check-discount">
					<div className="content-check">
						<label className="text-check" htmlFor="inputTime">
							Hora de entrada
						</label>
						<input
							type="time"
							id="inputTime"
							defaultValue={getInputTime()}
						></input>
					</div>
					<div className="content-check">
						<label className="text-check" htmlFor="inputDiscount">
							Porcentaje a descontar
						</label>
                        <i className='porcentage-simbol'>%</i>
						<input
							type="number"
							id="inputDiscount"
							defaultValue={0}
						></input>
					</div>
					<div className='content-check'>
						<button className='btn-info'>
							ACEPTAR
						</button>

					</div>
				</div>
			</div>
		);
	}
}
