import React, { useRef, useState } from 'react';

import './modal.css';

export default function Modal(props) {
	var children = props.children;
	const [showModal, setShowModal] = useState(false);
	const modalRef = useRef(null);
	return (
		<React.Fragment>
			<button
				className="btn-modal"
				onClick={() => modalRef.current.id="modal-activated"}
			>
				{props.description}
			</button>

			<section  ref={modalRef} className="modal" >
				<div className="modal__container">
					<button
						className="modal__close"
						onClick={() => modalRef.current.id="modal"}
					>
						X
					</button>
					{children}
				</div>
			</section>
		</React.Fragment>
	);
}
