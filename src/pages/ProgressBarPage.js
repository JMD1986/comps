import React from "react";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

function ProgressBarPage() {
  const [amount, setAmount] = useState(50);
  const changeAmount = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };
  return (
    <div>
      <input type="number" min="1" max="100" onChange={changeAmount} />
      <ProgressBar amount={amount} />
    </div>
  );
}

export default ProgressBarPage;
