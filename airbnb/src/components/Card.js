import React from "react";
import star from "../images/star.png";


export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card--container">
      { badgeText && <div className="card--badge">{ badgeText }</div>
      }

      <div>
        <img src={ props.item.coverImg } alt={ props.item.alt } className="card--image" />
      </div>
      <div className="card--info">
        <p>
          <img src={ star } alt="star" className="card--star" />
          &nbsp;{ props.item.stats.rating }
          <span className="gray">
            &nbsp;({ props.item.stats.reviewCount }) · { props.item.location }
          </span>
        </p>
        <p>{ props.item.title }</p>
        <p><span className="bold">From ${ props.item.price }</span> / person</p>
      </div>
    </div>
  )
}