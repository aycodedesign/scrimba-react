import React from "react";
import logo from "./img/logo.svg";

export default function Header() {
	return (
		<>
			<header>
				<nav>
					<img className='nav-logo' src={logo} alt='React logo'></img>
					<ul className='nav-items'>
						<li>Pricing</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>
		</>
	);
}