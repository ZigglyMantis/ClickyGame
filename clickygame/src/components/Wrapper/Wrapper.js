import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
    return (
        <div className="wrapper jumbotron">{props.subs}</div>
    )
}

export default Wrapper;