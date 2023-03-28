import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  return (
    <>
      <Navbar title="TextUtils" mode={mode} about="About Us" />
      <TextForm heading="Enter your text to analyze" />
    </>
  );
}

export default App;
