import React from "react";

 import "./about.css";

function About(){
    return(
  <div className="about-container">
    <p>ABOUT US</p>
    <h1 className="title">
        Know more about us.
    </h1>
    <dl className="allsection">
    <section className="card1">
      <dt>About us.</dt>
      <dd>Sed ut perspiciatis unde omnis
         iste natus error sit voluptatem accusantium doloremque 
         laudantium, totam rem</dd>
    </section>
    <section className="card2">
        <dt>Services.</dt>
         <dd>sed ut perspiciatis unde omnis iste natus error 
          sit voluptatem accusantium doloremque laudantium, 
          totam rem</dd>
    </section>
    <section className="card3">
          <dt>Our work</dt>
          <dd>sed ut perspiciatis unde omnis iste natus error 
          sit voluptatem accusantium doloremque laudantium, 
          totam rem</dd>
        </section>
    </dl>
   <section className="container">
    <img src="richone.png"></img>
    <h1>"dedicated to help people’s design needs.”</h1>
   </section>
      <search className="container p">
        <p>Quis ipsum suspendisse ultrices gravida risus 
      commodo viverra maecenas accumsan lacus vel facilisis</p>
       </search>
    <section className="container h3">
    <h3>__________ Cathy Hills, CEO</h3>
    </section>
    <section className="background">
      <h1>Who we are</h1>
      <p>We are a digital agency that builds amazing products.</p>
     <a href="#"><button>Get Started</button></a>
    </section>
    <section className="combined">
   <section className="cardcontainer">
     <h3>beliefs</h3>
        <h1>Honesty and hard work are our beliefs.</h1>
        <p>Quis ipsum suspendisse ultrices gravida risus
           commodo viverra
           maecenas accumsan lacus vel facilisis.</p>
           <button>Get started</button>
   </section>
   <section className="athercontainer">
    <h3>BUILD</h3>
    <h1>Build that great idea that you have</h1>
    <p>Quis ipsum suspendisse ultrices gravida risus commodo
       viverra maecenas accumsan lacus vel facilisis</p>
       <button>LEARN MORE</button>
   </section>
   </section>
   <section className="slider">
    <h1>We work in several verticals</h1>
   </section>
   
  </div>
    )
}
export default About;