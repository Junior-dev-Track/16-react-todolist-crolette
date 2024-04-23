import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/App.css';
import './assets/styles/Header.css';
import Todolist from './assets/components/Todolist';
import Header from './assets/components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<Todolist />
	</React.StrictMode>
);

