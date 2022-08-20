import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './models/Layout/Layout';
import MainMenu from './models/MainMenu/mainMenu';
import AddPersonal from './models/addPersonal/AddPersonal';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<MainMenu />} />
					<Route exact path="/addPersonal" element={<AddPersonal/>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
