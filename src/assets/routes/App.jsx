import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

export default function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
