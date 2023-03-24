import React, { useState } from "react";

export default function TextForm(props) {
  const upperCaseFunc = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const sentenceCaseFunc = () => {
    let newText = text[0].toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  };
  const lowerCaseFunc = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const changeHandle = (event) => {
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const [text, setText] = useState("");
  return (
    <>
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
          <button className="btn btn-primary  " onClick={upperCaseFunc}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-3" onClick={lowerCaseFunc}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mr-3 " onClick={sentenceCaseFunc}>
            Convert to sentenceCase
          </button>
          <button className="btn btn-primary ml-3 " onClick={speak}>
            speak
          </button>
        </div>
        <div className="container my-3">
          <h2>Text Summary</h2>
          <p>
            <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
            characters
          </p>
          <p>
            <b>{(text.length / 6) * 0.008}mint</b> this much time will it take
            you to read the above para
          </p>
          <h2>Preview your text</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
