import React, { useState } from "react";

export default function TextForm(props) {
  const upperCaseFunc = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const changeHandle = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("user text here");
  return (
    <div>
      <div className="container my-3">
        <h1 className="my-4">{props.heading}</h1>
        <div className="input-group my-4">
          <textarea
            value={text}
            onChange={changeHandle}
            className="form-control"
            aria-label="With textarea"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperCaseFunc}>
          Convert to UpperCase
        </button>
      </div>
    </div>
  );
}
