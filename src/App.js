import "./App.css";
import DropDown from "./components/DropDown";
function App() {
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
      <DropDown options={options} />
    </div>
  );
}

export default App;
