import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import CollapsibleExample from './components/Navbar';
import './index.scss'
function App() {
return (
	<Router>
	<CollapsibleExample />
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/blogs' element={<Blogs/>} />
		
	</Routes>
	</Router>
);
}

export default App;
