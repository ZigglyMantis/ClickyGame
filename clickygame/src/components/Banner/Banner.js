import React from "react";
import "./Banner.css";

function Banner () {
    return (
        <div className="container">
        <h1>Clicky Game!</h1>
        <h3>Clicking on an image give 1 score, reach 16 to win. don't click the same image twice.</h3>
        </div>
    )
}

export default Banner;