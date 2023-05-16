import "./App.css";
import { useState } from "react";
import DropDown from "./components/DropDown";
function App() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
  ];
  return (
    <div className="App">
      <DropDown
        options={options}
        selection={selection}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default App;
