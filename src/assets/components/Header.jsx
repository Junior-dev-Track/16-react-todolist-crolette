



const Title = () => {
	const name = 'Peter';
	return <h1>Hello, {name}</h1>;
};

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu-item">About</div>
			<div className="menu-item">Portfolio</div>
			<div className="menu-item">Contacts</div>
		</div>
	);
};

const Header = () => {
	return (
		<div className="header">
			<Title />
			<Menu />
		</div>
	);
};
