import react from "react"
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
            <section className="card-wrapper">
            <section className="image">
            <img src="richone.png" alt="richone" />
            </section>
            <section className="card-body">
                <p>There are many variations of passages of 
                    Lorem Ipsum available, but the majority
                    have suffered
                    alteration in some form, by injected humour</p>
            </section>
            <section className="card-footer">
                <h4 class="user-name">Robert Fox</h4>
                <span class="user-role">CEO, Parkview Int.Ltd</span>
            </section>

          <div class="stars">
          ★ ★ ★ ★ ★
          </div>
            </section>
           </section>
        </div>
    )
}
export default FQA;