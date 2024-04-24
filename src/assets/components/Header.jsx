import { useState } from 'react';
import Button from './Buttons.jsx';

export default function Header() {
	const [colorScheme, setColorScheme] = useState('dark');

	function handleSetColorScheme() {
		colorScheme == 'dark' ? setColorScheme('light') : setColorScheme('dark')
	}

	return (
		<header className="">
			<Button
				onClick={handleSetColorScheme}
				textButton={
					colorScheme === 'dark'
						? (<i className="fa-regular fa-sun"></i>)
						: (<i className="fa-solid fa-moon"></i>)
				}
			/>
		</header>
	);
}
