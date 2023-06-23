// Build a stopwatch widget which can measure how much time has passed.
//  It shows the current timer and has two buttons
// underneath: "Start/Stop" and "Reset".

// Requirements
// Start / Stop Button: Starts / stops the timer depending
// on whether the timer is running.
// Reset: Resets the timer to 0 and stops the timer.
// The timer shows the number of seconds elapsed, down
// to the millisecond.
// Clicking on the timer should start / stop the timer
//  The Start / Stop button's label should update accordingly as well.
// It'd be a nice optional addition to format the time
// to display in hh: mm: ss:ms format.
// You are free to exercise your creativity to style
// the appearance of the stopwatch.
// You can try out Google's stopwatch widget for inspiration and an example.
import React from "react";
import { useState } from "react";

function StopWatch() {
  const [timeElapsed, setTimeElapsed] = useState(null);
  const [time, setTime] = useState(null);

  function startTime() {}
  function stopTime() {}
  return (
    <div>
      {time}
      {timeElapsed}
      <button onClick={startTime}>start</button>
      <button onClick={stopTime}>stop</button>
    </div>
  );
}

export default StopWatch;
