import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <marquee behavior="scroll" direction="left" className="running-text">
        ......all elements below are dragable......
      </marquee>
      <Home />
    </>
  );
}

export default App;
