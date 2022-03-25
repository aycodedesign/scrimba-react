import React from "react";
import group_images from "../images/group-photo.png"

export default function Hero() {
  return (
    <header className="hero--header">
      <img src={ group_images } alt="Group images" className="hero--image" />
      <h1 className="hero--heading">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </header>
  )
}