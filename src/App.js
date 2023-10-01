import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Learn from './Routes/Learn';
import './App.css';
function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/learn' element={<Learn />} />
		</Routes>
	);
}

export default App;
