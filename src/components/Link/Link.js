import React from "react";
import "./Link.css"
export default function Link(props)
{
    return(
       <a href={props.url} className="ltext">{props.linktext}</a>
    )
}
