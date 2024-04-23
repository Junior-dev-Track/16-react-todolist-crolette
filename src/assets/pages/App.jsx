import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/App.css';
import '../styles/Header.css';
import Todolist from '../components/Todolist';
import Header from '../components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<Todolist />
	</React.StrictMode>
);

