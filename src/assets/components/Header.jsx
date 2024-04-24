import { useState } from 'react';
import Button from './Buttons.jsx';
import { NavLink } from 'react-router-dom';

export default function Header() {
	const [colorScheme, setColorScheme] = useState('dark');

	function handleSetColorScheme() {
		colorScheme == 'dark' ? setColorScheme('light') : setColorScheme('dark');
	}

	return (
		<header className="">
			<div className="container">
				<nav>
					<NavLink
						to={`/`}
						className={({ isActive }) => (isActive ? 'active' : null)}
					>
						Home
					</NavLink>
					<NavLink
						to={`/calendar`}
						className={({ isActive }) => (isActive ? 'active' : null)}
					>
						Calendar
					</NavLink>
				</nav>
				<Button
					onClick={handleSetColorScheme}
					textButton={
						colorScheme === 'dark' ? (
							<i className="fa-regular fa-sun"></i>
						) : (
							<i className="fa-solid fa-moon"></i>
						)
					}
				/>
			</div>
		</header>
	);
}
