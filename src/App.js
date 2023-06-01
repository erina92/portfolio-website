import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./components/HomePage/Home";
import About from "./components/AboutMe/About";
import Services from "./components/services/Services";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Experiences/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <HomePage />
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
