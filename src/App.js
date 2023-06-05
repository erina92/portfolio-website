import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
