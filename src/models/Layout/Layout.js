import React from 'react';
import './Layout.css';

class Layout extends React.Component {
	render() {
		const children = this.props.children;
		return (
			<React.Fragment>
				{/* Header */}
				<div className="Header-app">
					<div className="Logo-Text">
						<h1 className="letter-M">M</h1>
						<h1 className="text">ogar</h1>
					</div>
					<div className="header-description">
						<p>muebles</p>
					</div>
				</div>

				<div className="body-conteiner">{children}</div>
			</React.Fragment>
		);
	}
}

export default Layout;
