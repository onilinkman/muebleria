import { Link } from "react-router-dom"
export default function MenuInventory(props){
    return(
        <div className="body-menu">
				<Link className="btn-to-modal" to="/MenuInventory/bills">
					<p>GASTOS</p>
				</Link>
				<Link className="btn-to-modal" to="/MenuInventory/ItemList">
					<p>LISTA DE MUEBLES</p>
				</Link>
				<Link className="btn-to-modal" to="/MenuInventory/Storage">
					<p>DEPOSITOS</p>
				</Link>
				<Link className="btn-to-modal" to="/MenuInventory">
					<p>CONTROL DE DEPOSITOS</p>
				</Link>
				<Link className="btn-to-modal" to="/MenuInventory">
					<p>TRASPASOS DE MUEBLES</p>
				</Link>
				<Link className="btn-to-modal" to="/MenuInventory">
					<p>EMBARQUES EN ESPERA</p>
				</Link>
                <Link className="btn-to-modal" to="/">
					<p>VOLVER AL MENU PRINCIPAL</p>
				</Link>
			</div>
    )
}