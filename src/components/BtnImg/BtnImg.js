import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import add_photo from '../../assets/icons/add_a_photo.svg';

const BtnImg = forwardRef((props, ref) => {
	var file;

	const CLASS_NAME = 'image-panel';
	const VALUE = 'add_photo';
	const IMG_ID = 'preview-img';
	const INPUT_ID = 'capture-img';
	const INPUT_TYPE = 'file';
	const INPUT_ACCEPT = 'image/*;capture=camera';

	const imgPreview = useRef(null);
	const refInputImg=useRef(null)


	const onSelectImg = (e) => {
		file = e.target.files[0];
		if (file) {
			let reader = new FileReader();
			reader.onload = () => {
				imgPreview.current.src = reader.result;
			};
			reader.readAsDataURL(file);
		}
		e.target.value = ''; // con esto aseguramos que cuando se cargue la misma imagen vuelva a disparar onChange
	};
	const selectImage = () => {
		refInputImg.current.click();
	};
	
	useImperativeHandle(ref, () => ({
		RestaurePhoto() {
			imgPreview.current.src = add_photo;
			imgPreview.current.value = '';
			file = null;
		},
		GetByteImage() {
			
			return imgPreview.current.src;
		},
		SetSrc(src){
			imgPreview.current.src=src
		},
		isSrcBase64Image() {
			
			const regex = /^data:image\//;
			return regex.test(imgPreview.current.src);
		  }
	}));
	return (
		<React.Fragment>
			<div className={CLASS_NAME} onClick={selectImage}>
				<img
					value={VALUE}
					src={add_photo}
					alt={"sin imagen"}
					id={IMG_ID}
					ref={imgPreview}
				></img>
			</div>
			<input
				ref={refInputImg}
				id={INPUT_ID}
				type={INPUT_TYPE}
				accept={INPUT_ACCEPT}
				src={add_photo}
				onChange={onSelectImg}
			/>
		</React.Fragment>
	);
});

export default BtnImg;
