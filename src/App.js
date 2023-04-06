import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  //function
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#060047";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  let toggleMode2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#850000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleMode2={toggleMode2}
        about="About Us"
      />
      <TextForm mode={mode} heading="Enter your text to analyze" />
      <About />
    </>
  );
}

export default App;
