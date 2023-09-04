import { useState, useEffect } from "react";
import { paragraphs } from "./paragraphs.json"
import  "../styles.css"

export function TypeWindow(): JSX.Element {
    const paragraphsArray:string[] = paragraphs;
    const [originalText, setOriginalText] = useState<string>(paragraphsArray[0]);
    const [typedText, setTypedText] = useState<string>('');
    const [inError, setInError] = useState<boolean>(false);
    
    
    
    useEffect (()=> {
        if(originalText.slice(0,typedText.length+1) !== typedText) {
            setInError(true);
        }else{
            setInError(false);
        }
        if(originalText === typedText) {
            alert('well done! Try next challenge')
            setOriginalText(paragraphsArray[1])
        }
    }, [typedText, originalText, paragraphsArray])
    console.log(typedText)

    return (
    <div>
        <p className="original-text">{originalText}</p><br/>
        Type here:
        <textarea  className="typed-text-not-error" onChange={(event) => {setTypedText(event.target.value)}}/>
       <p>{inError}</p>
    </div>
    );
}
