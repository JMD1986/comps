import "./TicTacToe.css";
import React from "react";
import { useState } from "react";
function Square() {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function TicTacToe() {
  return (
    <div>
      <Board />
    </div>
  );
}

export default TicTacToe;
