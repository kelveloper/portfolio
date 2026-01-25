import React, { useState, useEffect, useRef } from 'react';

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

const InteractiveText = ({
    text,
    className,
    style,
    scrambleChars,
    enableAutoGlitch = false,
    glitchInterval = 3000,
    as: Component = 'h1'
}) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);
    const shuffledIndicesRef = useRef([]);

    // Fisher-Yates shuffle
    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const scramble = () => {
        // Create a random order of indices to resolve
        // This ensures the "glitch" fix resolves randomly across the word, not left-to-right
        shuffledIndicesRef.current = shuffleArray([...Array(text.length).keys()]);

        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        // Check if this specific index is scheduled to be resolved yet
                        // "shuffledIndicesRef.current.indexOf(index)" gives us the "order" of this index.
                        // If that order is less than current iteration count, it's resolved.
                        const resolveOrder = shuffledIndicesRef.current.indexOf(index);

                        if (resolveOrder < Math.floor(iteration)) {
                            return text[index];
                        }
                        return (scrambleChars || chars)[Math.floor(Math.random() * (scrambleChars || chars).length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            // Controls speed of resolution
            iteration += 1 / 2;
        }, 30);
    };

    useEffect(() => {
        let autoGlitchTimer;
        if (enableAutoGlitch) {
            autoGlitchTimer = setInterval(() => {
                scramble();
            }, glitchInterval);
        }

        return () => {
            clearInterval(intervalRef.current);
            if (autoGlitchTimer) clearInterval(autoGlitchTimer);
        };
    }, [enableAutoGlitch, glitchInterval]); // Re-run if configs change

    return (
        <Component
            className={className}
            style={{ ...style, cursor: 'default' }}
            onMouseOver={scramble}
        >
            {displayText}
        </Component>
    );
};

export default InteractiveText;
