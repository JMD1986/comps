// Build a 3x3 grid of light cells(omitting the center cell)
//  where you can click on the cells to activate them, turning
//  them green.When all the cells have been activated, they
//  will be deactivated one by one in the reverse order they
//   were activated with a 300ms interval in between.
import { useState } from "react";
import React from "react";
import "./lightStyles.css";

function ReversingLights() {
  const [clicked, setClicked] = useState(false);
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  function classNames(...args) {
    return args.filter(Boolean).join();
  }
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      // Use the callback version of setOrder to ensure
      // we are reading the most updated order value.
      setOrder((origOrder) => {
        // Make a clone to avoid mutation of the orders array.
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };
  const Square = ({ filled, label, onClick, isDisabled }) => {
    return (
      <div
        className={["cell", filled && "cell--activated"]
          .filter(Boolean)
          .join(" ")}
        onClick={onClick}
        aria-label={label}
        disabled={isDisabled}
      ></div>
    );
  };
  return (
    <div className="squareWrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) =>
          value ? (
            <Square
              key={index}
              label={`Cell ${index}`}
              // Lookup efficiency can be improved by using
              // a separate set/dict but that's overkill given
              // the low number of cells.
              filled={order.includes(index)}
              isDisabled={order.includes(index) || isDeactivating}
              onClick={() => {
                // Make a clone to avoid mutation of the orders array.
                const newOrder = [...order, index];
                setOrder(newOrder);

                // All the cells have been activated, we can proceed
                // to deactivate them one by one.
                if (newOrder.length === config.flat(1).filter(Boolean).length) {
                  deactivateCells();
                }
              }}
            />
          ) : (
            <span key={index} />
          )
        )}
      </div>
      {/* Helper to show the state */}
      <pre>order array: {order.join(", ")}</pre>
    </div>
  );
}

export default ReversingLights;
