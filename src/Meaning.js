import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
return (
    <div className="Meaning">
<h3> {props.meaning.partOfSpeech}</h3>

{props.meaning.definitions.map(function(definition, index)
{
    return (
        
    <div className="description" key={index}>
        <p>
        
        <strong>{definition.definition}</strong>
        <br />
        
       <em> {definition.example}</em>
       <br />
       
       <Synonyms synonyms={definition.synonyms} />
        </p> 
        
        </div>
);
    })}
</div>
);}

