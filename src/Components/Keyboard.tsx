import classes from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps={
  activeLetters:string[];
  inactiveLetters:string[];
  addGuessedLetter:(letter:string)=>void;
  disabled?:boolean
}

const Word = ({activeLetters, inactiveLetters,addGuessedLetter,disabled=false}:KeyboardProps) => {

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minMax(75px,1fr))",
        gap: ".5rem",
        alignSelf: "stretch",
      }}
    >
      {KEYS.map((key) => (
        <button onClick={addGuessedLetter.bind(null,key)} disabled={activeLetters.includes(key)||inactiveLetters.includes(key)||disabled}  className={`${classes.btn} ${activeLetters.includes(key) && classes.active} ${inactiveLetters.includes(key) && classes.inactive} `} key={key}>
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Word;
