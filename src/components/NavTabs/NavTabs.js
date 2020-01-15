import React from "react";
import "./NavTabs.css";

function NavTabs (props) {
    return (
        <div className="row nav-bar nav-bar-fluid">
            <div className="col-3">
                <h2>Clicky Game</h2>
            </div>
            <div className="col-6">
                <h2>{props.victoryCondition}</h2>
            </div>
            <div className="col-3">
                <h2>Score: {props.score} |-| Wins: {props.Wins}</h2>
            </div>
        </div>
    );
}

export default NavTabs;