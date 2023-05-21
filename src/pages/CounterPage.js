import { useState, useEffect } from "react";
import Button from "../components/Button";
function useSomething(initialCount) {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return {
    count,
    handleClick,
  };
}
function CounterPage({ initialCount }) {
  const { count, handleClick } = useSomething(initialCount);
  return (
    <div>
      count is {count}
      <Button onClick={handleClick}>increment</Button>
    </div>
  );
}
export default CounterPage;
