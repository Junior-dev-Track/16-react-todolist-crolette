import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './assets/routes/App.jsx'
import './assets/styles/App.css'
import ErrorPage from './assets/routes/ErrorPage.jsx';
import Calendar from './assets/routes/Calendar.jsx';
import Todolist from './assets/components/Todolist.jsx';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <Todolist />,
			},
			{
				path: '/calendar',
				element: <Calendar />,
			},
		],
	},
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)