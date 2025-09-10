import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../store/CharacterContext";
import { ThemeContext } from '../store/ThemeContext';

import infoImg from '../assets/images/icon-info.svg';

function MainContainer() {   
    const {darkMode} = useContext(ThemeContext);
    const bgClass = darkMode ? 'bg-natural-900' : 'bg-natural-100';
    const textareaClass = darkMode ? 'bg-natural-700' : 'bg-natural-200';
    const textClass = darkMode ? 'text-natural-200' : 'text-natural-700';
    
    

    const {
        totalCharacter,
        setTotalCharacter,
        setWordCount,
        setSentenceCount,
        excludeSpacesIsChecked,
        setExcludeSpacesIsCheked,
        textareaValue,
        setTextareaValue,
        characterLimitIsChecked,
        setCharacterLimitIsChecked,
        limitInput,
        setLimitInput,
        limitSet,
        setLimitSet,
    } = useContext(CharacterContext);
    

    function handleTextareaChange(e) {
        const value = e.target.value;
        setTextareaValue(value);

        const words = value.trim().split(/\s+/).filter(Boolean);
        setWordCount(words.length);

        const sentences = value.split(/[.!?]+/).filter(Boolean);
        setSentenceCount(sentences.length);
    }
    useEffect(() => {
        const length = excludeSpacesIsChecked ? textareaValue.replace(/\s/g, "").length : textareaValue.length;
        setTotalCharacter(length);
    }, [textareaValue, excludeSpacesIsChecked]);

    useEffect(() => {
        if(characterLimitIsChecked && !limitInput) {
            setLimitInput(totalCharacter);
            setLimitSet(true);
        }
    }, [characterLimitIsChecked, totalCharacter, limitSet]);

    function handleSpaceInputCheckChange(e) {
        const isChecked = e.target.checked;
        setExcludeSpacesIsCheked(isChecked);
    }

    function handleCharacterLimitIsChecked(e) {
        const isChecked = e.target.checked;
        setCharacterLimitIsChecked(isChecked);
        setLimitInput(Number(totalCharacter));
    }

    

    function handleLimitChange(e){
        setLimitInput(e.target.value)
    }

    const focusClass = characterLimitIsChecked && totalCharacter > limitInput ? 'focus:ring-orange-500' : 'focus:ring-blue-500';
    
    return(
        <main className={`my-10 ${bgClass}`}>
            <section>
                <textarea 
                className={`${textClass} w-full h-50.5 p-3 text-xl rounded-lg scrollbar-hide resize-none focus:outline-none focus:shadow-[0_0_10px_0] focus:ring-2 ${focusClass}  focus:ring-opacity-50 ${textareaClass}`} 
                name="" 
                id=""
                onChange={handleTextareaChange}
                >
                </textarea>
            </section>
            <section className="mt-4 sm:flex sm:flex-col sm:justify-between">
                {characterLimitIsChecked && totalCharacter > limitInput && (<article className="mb-5 flex gap-2 items-center">
                    <img src={infoImg} alt="" />
                    <p className="text-orange-500">Limit reached! Your text exceeds <span>{totalCharacter}</span> characters.</p>
                </article>)}
                <div className="sm:flex sm:justify-between">
                    <div className="sm:flex sm:gap-2">
                        <article className="flex items-center gap-3 mb-2">
                            <input className="" type="checkbox" name="" id="space-checkbox" onChange={handleSpaceInputCheckChange} />
                            <label htmlFor="space-checkbox" className="text-ba">Exclude Spaces</label>
                        </article>
                        <article className="flex items-center gap-3 mb-2">
                            <input className="" type="checkbox" name="" id="limit-checkbox" onChange={handleCharacterLimitIsChecked} />
                            <label htmlFor="limit-checkbox" className=" text-ba">Set Character Limit</label>
                            {characterLimitIsChecked && <input type="text" className="w-16 sm:w-14 h-9 sm:h-7 border-1 border-natural-600 rounded-md text-center" value={limitInput} onChange={handleLimitChange} />}
                        </article>
                    </div>
                    <p>Approx. reading time: 1 minute</p>
                </div>
            </section>
        </main>
    );
}

export default MainContainer;