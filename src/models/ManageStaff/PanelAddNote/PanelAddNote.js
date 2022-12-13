export default function PanelAddNote(props) {
	return (
		<div className="content-panel-add-note comboBoxSelectStaffContent">
			<div className="content-text-note">
				<label className="label-description margin-top-15">Agregar Nota</label>
				<textarea className="margin-top-15" id="text_note" rows={4}></textarea>
			</div>
            <button className="btn-info margin-top-15">ACEPTAR</button>
		</div>
	);
}
