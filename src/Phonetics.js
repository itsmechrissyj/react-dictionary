import React from "react";

export default function Phonetics (props) {
    return <div className= "Phonetic">
<a href={props.phonetics.audio} rel="noreferrer" target="_blank">
    Listen 
</a>
 {props.phonetics.text} 
    </div>
}