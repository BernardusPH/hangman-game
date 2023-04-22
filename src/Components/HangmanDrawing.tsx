import React from "react"

const HEAD = (
  <div
    style={{
      width: "70px",
      height: "70px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-40px",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "200px",
      background: "black",
      position: "absolute",
      top: "135px",
      right: 0,
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "170px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "170px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "320px",
      right: "-90px",
      rotate: "50deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "320px",
      right: 0,
      rotate: "-50deg",
      transformOrigin: "right bottom",
    }}
  />
);



type HangmanDrawingProp = {
  numberOfGuesses: number;
};
const BODY_PARTS = [  { id: 0, component: HEAD },  { id: 1, component: BODY },  { id: 2, component: RIGHT_ARM },  { id: 3, component: LEFT_ARM },  { id: 4, component: RIGHT_LEG },  { id: 5, component: LEFT_LEG },];

const Drawing = ({ numberOfGuesses }: HangmanDrawingProp) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses).map(({ id, component }) => (
        <React.Fragment key={id}>{component}</React.Fragment>
      ))}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default Drawing;
