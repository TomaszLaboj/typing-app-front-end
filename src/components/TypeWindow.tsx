import { useState, useEffect } from "react";
import { paragraphs } from "./paragraphs.json"
import  "../styles.css"

export function TypeWindow(): JSX.Element {
    const paragraphsArray:string[] = paragraphs;
    const [originalText, setOriginalText] = useState<string>(paragraphsArray[0]);
    const [typedText, setTypedText] = useState<string>('');
    
    
    
    console.log(typedText)

    return (
    <div>
        <p className="original-text">{originalText}</p><br/>
        Type here:
        <textarea  className="typed-text" onChange={(event) => {setTypedText(event.target.value)}}/>
       
    </div>
    );
}
