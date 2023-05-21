import Button from "../components/Button";
import { useState } from "react";
import Panel from "../components/Panel";
function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (event) => {
    // setValueToAdd(event.target.value);
    const value = parseInt(event.target.value) || 0;
    console.log(value);
    setValueToAdd(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>add a lot!</label>
        <input
          value={valueToAdd || ""}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          type="number"
          onChange={handleChange}
        />
        <Button>add it</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
