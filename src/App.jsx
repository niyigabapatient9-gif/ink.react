 
 
 import Nav from "./assets/ccomponent/nav";
 import About from"./assets/ccomponent/about";
 import Team from"./assets/ccomponent/team";
 import FQA from"./assets/ccomponent/FQA";
 import { Routes, Route } from "react-router-dom";
 import "./App.css";
 export default function App(){
  return(
      <div>
      {/* This renders your imported Nav component */}
      <Nav /> 
      <div className="all content">
      <Routes>
    
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/fqa" element={<FQA />} />
      </Routes>

      </div>
        <section className="hero-container">
      {/* Left side content */}
      <div className="main-content">
        <span >DESIGN AGENCY</span>
        <h1 className="title">
          Dedicated to <br />
          bring your <br />
          ideas to life.
        </h1>
        <button className="button">Get started</button>
      </div>

      {/* Right side image */}
      <div className="imagecontainer">
        <img src="creative.png"></img>
      </div>
    </section>
    {/*this render your imported About component*/}
    <About/>
    {/*imported team*/}
    <Team/>
    {/*imported FQA*/}
    <FQA/>
    </div>
  )
}