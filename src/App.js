import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from './components/HomeContainer'
import Profile from './pages/Profile'
import './css/styles.css';
import './App.css';
import Privacy from './pages/Privacy';
import Inquiry from './pages/Inquiry';
import Locations from './pages/Locations';
import ScrollToTop from './utils/ScrollToTop';
import Store from './pages/Store';

function App() {
	return (
		<div className="App">
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<HomeContainer />} />
				<Route path='profile' element={<Profile />} />
				<Route path='privacy' element={<Privacy />} />
				<Route path='inquiry' element={<Inquiry />} />
				<Route path='locations' element={<Locations />} />
				<Route path='store' element={<Store />} />
			</Routes>
		</div>
	);
}

export default App;
