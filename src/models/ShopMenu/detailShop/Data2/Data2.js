import ComboBox from '../../../../components/ComboBox/ComboBox';

export default function Data2(props) {
	return (
		<div className="body-data">
			<div className="data-input-content">
				<ComboBox
					id_name={'deposit-select'}
					description={'Seleccione Deposito:'}
					list={['Eloy Salmon', 'Pedro de la Gasca']}
				/>
			</div>
			<div className="data-input-content">
				<label>Tiene Factura?</label>
				<div className="radio-select">
					<div className="group-select">
						<input
							type="radio"
							id="invoice-yes"
							name="invoice"
							value={'Si'}
							
						/>
						<label htmlFor="invoice-yes">SI</label>
					</div>
					<div className="group-select">
						<input
							type="radio"
							id="invoice-no"
							name="invoice"
							value={'NO'}
						/>
						<label htmlFor="invoice-no">NO</label>
					</div>
				</div>
			</div>
            <div className="data-input-content">
				<label htmlFor="inputPrice">Precio venta (Bs):</label>
				<input className='text-input-play' id="inputPrice" type='number'></input>
			</div>
            <div className="data-input-content">
				<label htmlFor="inputAmount">Cantidad a Vender:</label>
				<input className='text-input-play' id="inputAmount" type='number'></input>
			</div>
		</div>
	);
}
