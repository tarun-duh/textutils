import React from "react";
import { useState } from "react";

export default function About() {
  //state

  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable dark mode");

  //functions

  let changeMode = () => {
    if (style.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    }
  };

  return (
    <div>
      <div className="container p-4" style={style}>
        <h1 className="my-3 text-danger">About Us</h1>
        <p>
          The React-based text manipulation app is a powerful tool designed to
          help users manipulate text in various ways. Whether you need to edit,
          format, or analyze text, this app provides a wide range of features
          that make the process fast and easy. Upon opening the app, the user is
          presented with a clean and simple interface that allows them to
          quickly begin working with text. The app's functionality includes
          features like text formatting options, search and replace functions,
          and text analysis tools that provide insights into the content of the
          text. One of the standout features of the app is its ability to
          perform advanced text manipulations through the use of regular
          expressions. This feature allows users to search for specific patterns
          of text within larger bodies of text, making it a useful tool for data
          analysts, programmers, and writers alike. The app's interface is
          intuitive and user-friendly, making it easy for even novice users to
          get started. The app is also highly customizable, allowing users to
          tweak the settings and preferences to suit their specific needs.
          Overall, the React-based text manipulation app is a versatile and
          powerful tool that provides users with a wide range of text
          manipulation features in a simple and intuitive package. Whether
          you're a writer, data analyst, or programmer, this app is sure to make
          your text manipulation tasks faster and more efficient.The React-based
          text manipulation app comes equipped with a wide range of text editing
          and formatting tools. Users can adjust the font size, style, and color
          of text, add bullet points and numbered lists, and apply various text
          styles such as bold, italic, and underlined. The app also includes
          search and replace functions that allow users to quickly find specific
          words or phrases within a document and replace them with new ones.
          Users can also perform batch replacements by applying the search and
          replace function to the entire document. In addition to basic text
          editing functions, the app provides users with a range of text
          analysis tools. These include word and character count, readability
          scores, and sentiment analysis. The app's analysis tools make it a
          useful tool for writers and marketers who need to analyze and optimize
          their written content. The app is designed with performance and
          scalability in mind, making it suitable for use in both personal and
          professional settings. It can handle large bodies of text with ease,
          and its responsive interface ensures that users can work quickly and
          efficiently. Overall, the React-based text manipulation app is an
          essential tool for anyone who works with text on a regular basis. Its
          powerful features, user-friendly interface, and scalability make it a
          valuable asset for writers, data analysts, marketers, and programmers
          alike.
        </p>
        <button onClick={changeMode} className="btn btn-primary">
          {style.color === "white" ? "disable dark mode" : "enable dark mode"}
        </button>
      </div>
    </div>
  );
}
