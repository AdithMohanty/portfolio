import React, { useState, useEffect } from 'react'

interface TypewriterProps {
    text: string;
    speed: number;
}

export function Typewriter({ text, speed }: TypewriterProps) {
    const [currentWord, setCurrentWord] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timer = setTimeout(() => {
                setCurrentWord(text.slice(0, index + 1));
                setIndex(index + 1);
            }, speed);

            return () => {clearTimeout(timer)};
        }
        
    }, [text, index, speed]);

    return <span>{currentWord}<span className="font-bold text-pretty text-slate-500 animate-pulse animate">▮</span></span> ;
}


