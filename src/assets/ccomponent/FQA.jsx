import react from "react"
import Testimonial from "./Testimonial"
import "./FQA.css";


function FQA(){
    return(
        <div>
            <section className="both">
                
            <h3>FQA</h3>
            <h1>Frequently asked questions.</h1>
            <p> can you desgin my site ?</p>
             <p> can you code my site ? </p>
              <p> where are you located ?</p>
              </section>
            
         <section className="ather">
            <h1>see what athers are saying</h1>
            </section>
            <Testimonial/>
            <section className="down">
                <p>your name</p>
                <p>your email</p>
                <button>join now</button>
            </section>
            <section className="footer">
                <h2>Desgy Solutions</h2>
                <section className="firts">
                    <h1>menu</h1>
                <a href="#">About us</a>
                <a href="#">Team</a>
                <a href="#">FQA</a>
                <a href="#">Blog</a>
                </section>
                <section className="second">
                    <h1>Category</h1>
                <a href="#">Design</a>
                <a href="#">Mockup</a>
                <a href="#">View all</a>
                <a href="#">Log in</a>
                </section>
                <section className="third">
                    <h1>Pages</h1>
                  <a href="#">404</a> 
                  <a href="#">instruction</a> 
                  <a href="#">license</a>  
                    
                </section>
                <section className="fourth">
                    <h1>Other</h1>
                  <a href="#">styleguid</a>
                  <a href="#">changelog</a>  
                </section>
            </section>
                
         </div>
          );
            }

export default FQA;