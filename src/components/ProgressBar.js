import React from "react";
import "./progressBar.css";

function ProgressBar({ amount }) {
  const MIN = 0;
  const MAX = 100;
  const clampedValue = Math.min(Math.max(amount, MIN), MAX);
  return (
    <div className="progress-wrapper">
      <div className="full-bar">
        <div
          className="progress"
          style={{ width: `${clampedValue}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
        >
          {amount}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
