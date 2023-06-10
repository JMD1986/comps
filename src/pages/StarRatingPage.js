import React from "react";
import StartRatings from "../components/StartRatings";
import { useState } from "react";
function StarRatingPage() {
  const [rating, setRating] = useState(3);

  return (
    <div>
      <StartRatings max={10} current={rating} onChange={setRating} />
    </div>
  );
}

export default StarRatingPage;
