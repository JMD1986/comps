import Button from "../components/Button";
import useCounter from "../hooks/use-counter";
function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      count is {count}
      <Button onClick={increment}>increment</Button>
    </div>
  );
}
export default CounterPage;
