import React from "react";
import MemeImg from "../images/memeimg.png";
import NewMemeImg from "../images/newmemeimg.png";
import memesData from "../memesData";

export default function Meme() {
	function getMemeImage() {
		const memesArray = memesData.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);

		const url = memesArray[randomNumber].url;

		console.log(url);
	}

	function handleMouseOver() {
		console.log("OVERED");
	}

	return (
		<div className='container'>
			<div className='form'>
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
			</div>
			<button onClick={getMemeImage}>
				<img src={NewMemeImg} alt='Get a new meme' />
			</button>
			<div className='container--meme'>
				<img
					// onMouseOver={handleMouseOver}
					className='container--img'
					src={MemeImg}
					alt='meme'
				/>
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
