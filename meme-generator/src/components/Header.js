import React from "react";
import trollface from "../images/trollface.png";

export default function Header() {
	return (
		<header>
			<div className='header--logo'>
				<img src={trollface} alt='Troll Face' />
				<h1>Meme Generator</h1>
			</div>
			<p>React Course - Project 3</p>
		</header>
	);
}
