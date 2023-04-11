import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results (props) {
    if (props.results) {
    return         <div className="Results">
        <section>

        
 {props.results.word} 

{props.results.phonetics.map(function(phonetic, index)
{return (
<div key={index}> 
<Phonetics phonetics={phonetic} />

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