import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Events from './Routes/Events';
import Store from './Routes/Store';
import Partners from './Routes/Partners';
import './App.css';
function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Events' element={<Events />} />
			<Route path='/Store' element={<Store />} />
			<Route path='/Partners' element={<Partners />} />
			<Route path='/*' element={<Home />} />
		</Routes>
	);
}

export default App;
