import React from "react";
import "./Phonetic.css"

export default function Phonetics (props) {
    return <div className= "Phonetic">
<a href={props.phonetics.audio} rel="noreferrer" target="_blank">
    Listen 
</a>
 {props.phonetics.text} 
    </div>
}