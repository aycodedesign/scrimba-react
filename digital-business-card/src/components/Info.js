import React from "react";
import profile from "../img/brownie-cupcake.jpg";
import icon_email from "../img/mail.png";
import icon_linkedin from "../img/linkedin.png";

export default function Info() {
  return (
    <header className="info--card_background">
      <img src={ profile } alt="Brownie Cupcake" className="info--img" />
      <h1 className="info--name">Brownie Cupcake</h1>
      <h2 className="info--title">Big Brother, Good Boy</h2>
      <h3 className="info--website">browniecupcake.net</h3>
      <div>
        <button className="info--button_email">
          <img src={ icon_email } alt="Email icon" />
          Email
        </button>
        <button className="info--button_linkedin">
          <img src={ icon_linkedin } alt="LinkedIn icon" />
          LinkedIn
        </button>
      </div>
    </header>
  )
}