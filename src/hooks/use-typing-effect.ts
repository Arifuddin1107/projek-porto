"use client";

import { useState, useEffect } from "react";

export default function useTypingEffect(
  words: string[],
  typingSpeed: number = 80,
  deletingSpeed: number = 40,
  delayBetweenWords: number = 2000
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const activeWord = words[currentWordIndex];
      const shouldDelete = isDeleting;

      if (!shouldDelete) {
        // Typing characters
        setCurrentText((prev) => activeWord.substring(0, prev.length + 1));

        // Word fully typed, set delay before deleting
        if (currentText === activeWord) {
          timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
          return;
        }

        timer = setTimeout(handleTyping, typingSpeed);
      } else {
        // Deleting characters
        setCurrentText((prev) => activeWord.substring(0, prev.length - 1));

        // Word fully deleted, move to the next word
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          timer = setTimeout(handleTyping, 500); // Small pause before next word
          return;
        }

        timer = setTimeout(handleTyping, deletingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return currentText;
}
