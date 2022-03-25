import React from "react";

export default function Joke(props) {
  return (
    <div className="joke">
      { props.setup && <p>SETUP: { props.setup }</p> }
      <h2 className="bottom-margin"> PUNCHLINE: { props.punchline }</h2>
      <hr />
    </div >
  )
}

