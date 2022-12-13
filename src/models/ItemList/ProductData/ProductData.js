import BtnImg from "../../../components/BtnImg/BtnImg"
import ComboBox from '../../../components/ComboBox/ComboBox'

/**
 * isDisable
 * 
 * @param {*} props 
 * @returns 
 */
export default function ProductData(props){
    var listColor=['red','blue']
    
    return(
        <div className="flex-space-around-100 ">
            <div className="flex-column">
                <BtnImg/>
                <label htmlFor="Note-area" className="text-label-play">Nota:</label>
                <textarea id="Note-area"></textarea>
            </div>
            <div className="content-grid-100">
                <div className="data-input-content">
                    <label className="text-label-play" htmlFor="inputName">Nombre:</label>
                    <input id="inputName" className="text-input-play" disabled={props.isDisable}></input>
                </div>
                <div className="data-input-content">
                    <label className="text-label-play" htmlFor="inputCode">Codigo:</label>
                    <input id="inputCode" className="text-input-play" disabled={props.isDisable}></input>
                </div>
                <div className="data-input-content">
                    <label className="text-label-play" htmlFor="inputBrand">Marca:</label>
                    <input id="inputBrand" className="text-input-play" disabled={props.isDisable}></input>
                </div>
                <div className="data-input-content">
                    <ComboBox id_name='input_color' description='Color:' list={listColor}/>
                </div>
                <div className="data-input-content">
                    <label className="text-label-play" htmlFor="inputSupplier">Proveedor:</label>
                    <input id="inputSupplier" className="text-input-play" disabled={props.isDisable}></input>
                </div>
                <div className="data-input-content">
                    <label className="text-label-play" htmlFor="inputPrice">Precio (Bs):</label>
                    <input id="inputPrice" className="text-input-play" disabled={props.isDisable}></input>
                </div>
                <div className="data-input-content">
                    <label className="text-label-play" htmlFor="inputPriceSale">Precio Venta (Bs):</label>
                    <input id="inputPriceSale" className="text-input-play" disabled={props.isDisable}></input>
                </div>
                <div className="data-input-content">
                    <label className="text-label-play" htmlFor="inputType">Tipo:</label>
                    <input id="inputType" className="text-input-play" disabled={props.isDisable}></input>
                </div>
            </div>
        </div>
    )
}