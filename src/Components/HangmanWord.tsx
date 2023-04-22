type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  lost?: boolean;
};

const Word = ({ guessedLetters, wordToGuess, lost }: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              color: !guessedLetters.includes(letter) && lost ? "red" : "",
              visibility:
                guessedLetters.includes(letter) || lost ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Word;
