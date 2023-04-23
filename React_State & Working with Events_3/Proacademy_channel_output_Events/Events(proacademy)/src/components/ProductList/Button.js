import React from "react";

function Button (props){
    console.log("Button component executed");
    return  <button  onClick={props.eventHandler} className="btn btn-primary">{props.children}</button>
}

export default Button;