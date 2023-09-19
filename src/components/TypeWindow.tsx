import { useState, useEffect } from "react";
import "../styles.css";
import { faker } from "@faker-js/faker";

export function TypeWindow(): JSX.Element {
    const [singleWord, setSingleWord] = useState<string>("");
    const [typedText, setTypedText] = useState<string>("");

    // const [inError, setInError] = useState<boolean>(false);

    useEffect(() => {
        generateNewWord();
    }, []);

    const generateNewWord = () => {
        const newWord = faker.word.sample();
        setSingleWord(newWord);
    };
    
    return (
        <div>
            <div onKeyDown={(key)=> key.}>{typedText}</div>
            <div className="original-text">{singleWord}</div>
            <button onClick={generateNewWord}>Generate</button>
        </div>
    );
}
