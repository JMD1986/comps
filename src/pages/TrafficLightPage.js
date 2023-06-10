import React from "react";
import TrafficLight from "../components/TrafficLight";
function TrafficLightPage() {
  const config = {
    red: {
      backgroundColor: "red",
      duration: 4000,
      next: "green",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 500,
      next: "red",
    },
    green: {
      backgroundColor: "green",
      duration: 3000,
      next: "yellow",
    },
  };
  return (
    <div>
      <TrafficLight config={config} />
    </div>
  );
}

export default TrafficLightPage;
