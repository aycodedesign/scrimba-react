import React from "react";
import MemeImg from "../images/memeimg.png";
import NewMemeImg from "../images/newmemeimg.png";

export default function Meme() {
	return (
		<div className='container'>
			<form className='form'>
				<input
					type='text'
					id='toptext'
					className='form--input'
					placeholder='Top text'
				/>
				{/* <p>shut up</p> */}
				<input
					type='text'
					id='bottomtext'
					className='form--input'
					placeholder='Bottom text'
				/>
				{/* <p>and take my money</p> */}
			</form>
			<button>
				<img src={NewMemeImg} alt='Get a new meme' />
			</button>
			<div className='container--meme'>
				<img src={MemeImg} alt='meme' />
				<span className='container--meme_top'>
					<b>SHUT UP</b>
				</span>
				<span className='container--meme_bottom'>
					<b>AND TAKE MY MONEY</b>
				</span>
			</div>
		</div>
	);
}
