import { NavLink } from "react-router-dom"



export default function Footer() {

    return (
			<>
				<div className="footer">
					<nav>
						<NavLink
							to={`/`}
							className={({ isActive }) =>
								isActive ? 'active' : null
							}
						>
							Home
						</NavLink>
						<NavLink
							to={`/calendar`}
							className={({ isActive }) =>
								isActive ? 'active' : null
							}
						>
							Calendar
						</NavLink>
					</nav>
				</div>
			</>
		);

}