import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './models/Layout/Layout';
import MainMenu from './models/MainMenu/mainMenu';
import AddPersonal from './models/addPersonal/AddPersonal';
import ManageStaff from './models/ManageStaff/ManageStaff'
import ShopMenu from './models/ShopMenu/ShopMenu'
import MenuInventory from './models/MenuInventory/MenuInventory';
import Bills from './models/Bills/Bill';
import ItemList from './models/ItemList/ItemList';
import Storage from './models/Storage/Storage';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<MainMenu />} />
					<Route exact path="/addPersonal" element={<AddPersonal/>} />
					<Route exact path="/manageStaff" element={<ManageStaff/>}/>
					<Route exact path='/ShopMenu' element={<ShopMenu/>}/>

					<Route exact path='/MenuInventory' element={<MenuInventory/>}/>
					<Route exact path='/MenuInventory/Bills' element={<Bills/>}/>
					<Route exact path='/MenuInventory/ItemList' element={<ItemList/>}/>
					<Route exact path='/MenuInventory/Storage' element={<Storage/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
