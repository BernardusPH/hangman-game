import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./Components/HangmanDrawing.tsx";
import HangmanWord from "./Components/HangmanWord.tsx";
import Keyboard from "./Components/Keyboard.tsx";

const wordToGuess: string = words[Math.floor(Math.random() * words.length)];

function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuessedLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectGuessedLetters.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => {
    return guessedLetters.includes(letter);
  });

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((prev) => {
        return [...prev, letter];
      });
    },
    [guessedLetters, isLoser, isWinner]
  );
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.preventDefault();

      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter]);

  function pageRefresh() {
    window.location.reload();
  }
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner, refresh to try again"}
        {isLoser && "Losser, refresh to try again"}
        {(isWinner || isLoser) && (
          <button
            style={{
              display: "block",
              margin: "auto",
              padding: ".5rem",
              fontFamily: "inherit",
              background: "ligthgray",
              fontSize: ".5em",
              color: "darkblue",
              cursor: "pointer",
            }}
            onClick={pageRefresh}
          >
            Refresh
          </button>
        )}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectGuessedLetters.length} />
      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        lost={isLoser}
      />
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectGuessedLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}

export default App;
