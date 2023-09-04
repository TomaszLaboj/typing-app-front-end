import { useState } from "react";

export function TypeWindow(): JSX.Element {

    const [originalText, setOriginalText] = useState<string>('');
    const [typedText, setTypedText] = useState<string>('');

   
    return (
    <div>
        <textarea className="original-text">{originalText}</textarea>
        Type here:
        <textarea className="typed-text" onChange={(event) => {setTypedText(event.target.value)}}/>
    </div>
    );
}
