import React from "react";
import "./Navbar.css";

function Navbar (props) {
    return (
        <div className="row nav-bar nav-bar-fluid">
            <div className="col-4">
                <h2>Clicky Game</h2>
            </div>
            <div className="col-4">
                <h2>{props.victoryCondition}</h2>
            </div>
            <div className="col-4">
                <h2>Score: {props.score} |-| Wins: {props.Wins}</h2>
            </div>
        </div>
    );
}

export default Navbar;