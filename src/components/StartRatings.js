// The widget accepts two parameters: the maximum number of stars and the
// number of currently filled stars.
// When a star is clicked, it is filled along with all the stars to its left.
// When the user hovers over the stars, all the stars under the cursor and its
// left are filled.
// The stars which need to be filled during hover take priority over
// existing filled state.
// If the cursor leaves the widget and no new selection is made, the
//  appropriate stars revert to the filled state before the hovering.
// Make the star rating widget reusable such that multiple instances
// can be rendered within the same page.
// The star icons, both empty and filled, are provided to you as SVGs.

import React from "react";
import { useEffect, useState } from "react";
import "./starsStyles.css";
function Star({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={["star-icon", filled ? "star-icon-filled" : ""].join(" ")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

function StartRatings({ max, current, onChange }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="stars-row">
      {Array.from({ length: max }).map((_, index) => (
        <span
          key={index}
          tabIndex={0}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onChange(index + 1)}
        >
          <Star
            filled={
              hoveredIndex != null ? index <= hoveredIndex : index < current
            }
          />
        </span>
      ))}
    </div>
  );
}

export default StartRatings;
