import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results (props) {
    if (props.results) {
    return         <div className="Results">
        <section>

        
<h2> {props.results.word} </h2>

{props.results.phonetics.map(function(phonetic, index)
{return (
<div key={index}> 
<h3><Phonetics phonetics={phonetic} /></h3>

</div>
 )

})}

{props.results.meanings.map(function(meaning, index) {
return <div key={index}>
    <Meaning meaning={meaning} />
    </div>;


})}</section>



        </div>;
        } else 
        {
            return null;
        }


   
}