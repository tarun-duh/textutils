import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us" />
      <TextForm heading="Enter your text to analyze" />
      {/* <About></About> */}
    </>
  );
}

export default App;
