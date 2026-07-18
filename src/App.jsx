 
 
 import Nav from "./assets/ccomponent/nav";
 import About from"./assets/ccomponent/about";
 import "./App.css";
 export default function App(){
  return(
      <div>
      {/* This renders your imported Nav component */}
      <Nav /> 
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
    </div>
  )
}