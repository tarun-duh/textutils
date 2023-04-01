import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function TextForm({ mode, heading }) {
  //usestates
  const [text, setText] = useState("");
  const [speakBool, setSpeakBool] = useState(true);
  //functions
  const upperCaseFunc = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const sentenceCaseFunc = () => {
    let arr = text.split(". ");
    let res = [];
    for (let i of arr) {
      if (i[0] === " ") {
        res.push(i[1].toUpperCase() + i.slice(2).toLowerCase());
      } else {
        res.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
      }
    }
    setText(res.join(". "));
  };

  const lowerCaseFunc = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const changeHandle = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    setSpeakBool(!speakBool);
    if (speakBool) {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    } else {
      window.speechSynthesis.cancel();
    }
  };

  const clear = () => {
    let newText = "";
    setText(newText);
  };

  const word = (text) => {
    let b = text.split(" ");
    let c = [];
    for (let i of b) {
      if (i != "") {
        c.push(i);
      }
    }
    return c.length;
  };
  return (
    <>
      <div>
        <div
          className={`container my-3 text-${
            mode === "dark" ? "light" : "dark"
          }`}
        >
          <h1
            className={`my-4 text-danger text-${
              mode === "dark" ? "light" : "dark"
            }`}
          >
            {heading}
          </h1>
          <div className={`input-group my-4 `}>
            <textarea
              value={text}
              onChange={changeHandle}
              style={{ backgroundColor: mode === "dark" ? "#060047" : "white" }}
              className={`form-control  text-${
                mode === "dark" ? "light" : "dark"
              }`}
              aria-label="With textarea"
              rows="10"
            ></textarea>
          </div>
          <button className="btn btn-primary  " onClick={upperCaseFunc}>
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary xs:btn-danger mx-3"
            onClick={lowerCaseFunc}
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-success mr-3 " onClick={sentenceCaseFunc}>
            Convert to sentenceCase
          </button>
          <button className="btn btn-warning mx-3 " onClick={speak}>
            {speakBool ? "Speak" : "Stop"}
          </button>
          <button className="btn btn-danger  " onClick={clear}>
            Clear
          </button>
        </div>
        <div
          className={`container my-3 text-${
            mode === "dark" ? "light" : "dark"
          }`}
        >
          <p>{mode}</p>
          <h2 className={`text-${mode === "dark" ? "light" : "dark"}`}>
            Text Summary
          </h2>
          <p>
            <b>{word(text)}</b> words and <b>{text.length}</b> characters
          </p>
          <p>
            <b>{((text.length / 6) * 0.008).toFixed(3)}min</b> this much time
            will it take you to read the above paragraph
          </p>
          <h2>Preview your text</h2>
          <p>
            {text.length === 0 ? " Type something above to preview here" : text}
          </p>
        </div>
      </div>
    </>
  );
}
