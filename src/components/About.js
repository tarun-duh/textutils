import React from "react";
import { useState } from "react";

export default function About({ mode }) {
  //state

  // const [style, setStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable dark mode");

  // //functions

  // let changeMode = () => {
  //   if (style.color === "white") {
  //     setStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //   } else {
  //     setStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //   }
  // };

  return (
    <div>
      <div
        className="container"
        style={{ color: mode === "light" ? "black" : "white" }}
      >
        <h1 className="my-3 bd-title">About Us</h1>
        <p className="lead ">
          Learn more about the <strong>TextTranXform</strong>, who created this,
          what's its features are and what techs are included.
        </p>
        <div>
          <h2>Introduction</h2>
          <p className="lead ">
            Basically, <strong>TextTranXform</strong> is a word counter and a
            character counting utility which can be used to manipulate your text
            in the way you want. You can remove extra spaces, copy the
            manipulated text as well as convert your text from uppercase to
            lowercase and lowercase to uppercase. And provided Minute Count time
            to read the text. Here is one more feature to preview all the text
            that user enters.
          </p>
        </div>
        <div>
          <h2>Tech Included</h2>
          <p className="lead ">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>React Router</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
