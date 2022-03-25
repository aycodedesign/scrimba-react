import React from "react";
import twitter from "../img/social/twitter-icon.png";
import facebook from "../img/social/facebook-icon.png";
import instagram from "../img/social/instagram-icon.png";
import github from "../img/social/github-icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={ twitter } alt="Twitter icon" className="footer--icon" />
      <img src={ facebook } alt="Facebook icon" className="footer--icon" />
      <img src={ instagram } alt="Instagram icon" className="footer--icon" />
      <img src={ github } alt="GitHub icon" className="footer--icon" />
    </footer>
  )
}