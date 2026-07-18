

import React from "react";
import "./slider.css";

function slider(){
    return(
        <div class="slider">
            <div class="group">
                <div class="card">1</div>
                <div class="card">2</div>
                <div class="card">3</div>
                <div class="card">4</div>
            </div>
            <div  aria-hidden class="group">
                <div class="card">1</div>
                <div class="card">2</div>
                <div class="card">3</div>
                <div class="card">4</div>
            </div>
        </div>
    )
}