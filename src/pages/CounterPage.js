import Button from "../components/Button";
import { useReducer } from "react";
import { produce } from "immer";
import Panel from "../components/Panel";
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE = "add-value-to-count";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;

    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;

    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;

    case ADD_VALUE:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      return;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
    // setCount(count + 1);
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    // setValueToAdd(event.target.value);
    const value = parseInt(event.target.value) || 0;
    console.log(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
    // setValueToAdd(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE,
      payload: state.valueToAdd,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>add a lot!</label>
        <input
          value={state.valueToAdd || ""}
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
