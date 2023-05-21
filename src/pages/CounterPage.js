import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE = "add-value-to-count";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
        valueToAdd: 0,
      };

    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
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
