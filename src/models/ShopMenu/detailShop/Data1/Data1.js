import ComboBox from '../../../../components/ComboBox/ComboBox';

export default function Data1(props) {
	return (
		<div className="body-data">
			<div className="data-input-content">
				<label htmlFor="inputName">Nombre:</label>
				<input className='text-input-play' id="inputName" disabled onChange={()=>{}}></input>
			</div>
			<div className="data-input-content">
				<label htmlFor="inputCode">Codigo:</label>
				<input className='text-input-play' id="inputCode" disabled onChange={()=>{}}></input>
			</div>
			<div className="data-input-content">
				<ComboBox
					id_name={'color-data'}
					description={'Color:'}
					list={['marron', 'rojo']}
				/>
			</div>
            <div className="data-input-content">
				<label htmlFor="inputType">Tipo:</label>
				<input className='text-input-play' id="inputType" disabled onChange={()=>{}}></input>
			</div>
            <div className="data-input-content">
				<label htmlFor="inputAvailable">Cantidad Disponible:</label>
				<input className='text-input-play' id="inputAvailable" disabled onChange={()=>{}}></input>
			</div>
		</div>
	);
}
