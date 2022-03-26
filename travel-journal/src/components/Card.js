import React from "react";
// import mtFuji from "../images/mt-fuji.png";
import gpsIcon from "../images/gps-icon.png";

export default function Card(props) {
	console.log(props);
	return (
		<div className='card--container'>
			<div className='card'>
				<img src={props.item.image} alt='Mount Fuji' />
				<div className='card--info'>
					<img src={gpsIcon} alt='GPS icon' />
					<p>{props.item.location}</p>
					<a href={props.item.googleMapsUrl} target='_blank'>
						View on Google Maps
					</a>
					<h1>{props.item.title}</h1>
					<p>
						{props.item.startDate} - {props.item.endDate}
					</p>
					<p>{props.item.description}</p>
				</div>
			</div>
		</div>
	);
}
