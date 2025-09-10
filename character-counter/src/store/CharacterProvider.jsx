import { useState } from "react";
import { CharacterContext } from "./CharacterContext";

export function CharacterProvider({children}) {
    const [textareaValue, setTextareaValue] = useState("");
    const [totalCharacter, setTotalCharacter] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [excludeSpacesIsChecked, setExcludeSpacesIsCheked] = useState(false)
    const [characterLimitIsChecked, setCharacterLimitIsChecked] = useState(false)
    const [limitInput, setLimitInput] = useState('');
    const [limitSet, setLimitSet] = useState(false);

    return(
        <CharacterContext.Provider value={{
            totalCharacter,
            setTotalCharacter,
            textareaValue,
            setTextareaValue,
            wordCount,
            setWordCount,
            sentenceCount,
            setSentenceCount,
            excludeSpacesIsChecked,
            setExcludeSpacesIsCheked,
            characterLimitIsChecked,
            setCharacterLimitIsChecked,
            limitInput,
            setLimitInput,
            limitSet,
            setLimitSet
        }}>
            {children}
        </CharacterContext.Provider>
    );
}