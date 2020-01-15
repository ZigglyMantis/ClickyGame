import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
    return (
        <div className="wrapper jumbotron jumbotron-fluid">{props.children}</div>
    )
}

export default Wrapper;