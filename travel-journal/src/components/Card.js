import React from "react";
import gpsIcon from "../images/gps-icon.png";

export default function Card(props) {
	return (
		<div className='card--container'>
			<img src={props.item.image} alt={props.item.title} />
			<div className='card--info'>
				<span className='inline'>
					<img src={gpsIcon} alt='location icon' />
					<p>{props.item.location}</p>
					<a href={props.item.googleMapsUrl} target='_blank'>
						View in Google Maps
					</a>
				</span>
				<h2>{props.item.title}</h2>
				<p className='dates'>
					{props.item.startDate} - {props.item.endDate}
				</p>
				<p>{props.item.description}</p>
			</div>
			<span id='hline' className='hline'></span>
		</div>
	);
}
