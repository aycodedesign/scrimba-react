import React from "react";
import logo from "../img/reactjs-icon.png"

export default function Navbar() {
  return (
    <nav>
      <img className="nav--icon" src={ logo } alt="React logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}