import React from "react";
import "./Synonyms.css";

export default function Synomyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
