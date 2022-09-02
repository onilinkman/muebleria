import { render } from '@testing-library/react';
import React from 'react';

/**
 * Props to send:
 * id_name : this is id and "for" key
 * description : text for the label
 * list : array json for select
 */
export default class ComboBox extends React.Component {
	render() {
		var listOptions = (list) => {
			let arr = [];
			for (let i = 0; i < list.length; i++) {
				arr.push(
					<option value={list[i]} key={list[i]}>
						{list[i]}
					</option>
				);
			}
			return arr;
		};
		return (
			<React.Fragment>
				<label htmlFor={this.props.id_name}>
					{this.props.description}
				</label>
				<select name={this.props.id_name} id={this.props.id_name}>
					{listOptions(this.props.list)}
				</select>
			</React.Fragment>
		);
	}
}
