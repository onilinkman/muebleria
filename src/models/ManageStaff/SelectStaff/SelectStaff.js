import ComboBox from '../../../components/ComboBox/ComboBox';

/**
 * Send next props:
 *
 * @property list a array list string example:'list=['staff1','staff2']
 *
 * @param {*} props
 * @returns
 */
export default function SelectStaff(props) {
	var listStaff = props.list;

	return (
		<div className="SelectStaffContainer">
			<div className="comboBoxSelectStaffContent">
				<ComboBox
					id_name="comboBoxSelectStaff"
					description="Seleccione empleado"
					list={listStaff}
				/>
				<label className="label-description" htmlFor="ciStaffText">
					Carnet de identidad
				</label>
				<input id="ciStaffText" disabled value={'54321'} />
				<div className="content-input-check">
					<label className="label-description">
						Se Descontara el Porcentaje?
					</label>
					<div className="content-options">
						<div className="input-radio-content">
							<input
								type="radio"
								name="isDiscount"
								value="discount"
                                id='discount'
								
							></input>
							<label htmlFor="discount">Si</label>
						</div>
						<div className="input-radio-content">
							<input
								type="radio"
								name="isDiscount"
								value="notDiscount"
                                id='notDiscount'
								defaultChecked
							></input>
							<label htmlFor="notDiscount">No</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
