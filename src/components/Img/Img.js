import React from "react";
import Esports from "./Esports.png";
import './Img.css'
export default function Img()
{
    return(
        <div className="container">
        <img src={Esports} className="Img" alt='' width={520} height={300}></img>
        </div>
    )
}


