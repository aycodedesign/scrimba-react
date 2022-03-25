import React from "react";
import phone from "../images/phone.png";
import mail from "../images/mail.png";

// ***PREFERRED METHOD IN CASE MORE VARIABLES ARE INTRODUCED ('props.' is distinctive)***
export default function Contacts(props) {
  return (
    <div className="contact-card">
      <img src={ props.img } />
      <h3>{ props.name }</h3>
      <div className="info-group">
        <img src={ phone } alt="phone icon" />
        <p>{ props.phone }</p>
      </div>
      <div className="info-group">
        <img src={ mail } alt="mail icon" />
        <p>{ props.email }</p>
      </div>
    </div>
  )
}

// ***DESTRUCTURED PROPS (listing the individual properties***
// export default function Contacts({ img, name, phone, email }) {
//   return (
//     <div className="contact-card">
//       <img src={ img } />
//       <h3>{ name }</h3>
//       <div className="info-group">
//         <img src={ phone } alt="phone icon" />
//         <p>{ phone }</p>
//       </div>
//       <div className="info-group">
//         <img src={ mail } alt="mail icon" />
//         <p>{ email }</p>
//       </div>
//     </div>
//   )
// }

