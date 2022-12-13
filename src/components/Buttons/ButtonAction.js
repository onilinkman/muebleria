import './ButtonAction.css';

/**
 * onClick send a function
 * styleNro send a number for style
 * text set a text for button
 * @param {*} props
 * @returns
 */
export default function ButtonAction(props) {
	const styles = [
		'btn-success',
		'btn-action',
		'btn-damage',
		'btn-dmg-toon',
		'btn-action-toon',
	];
	return (
		<button className={styles[props.styleNro]} onClick={props.onClick}>
			{props.text}
		</button>
	);
}
