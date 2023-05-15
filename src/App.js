import { GoBell, GoCloudDownload, GoDashboard } from "react-icons/go";
import "./App.css";
import Accordion from "./components/Accordion";
function App() {
  const items = [
    {
      id: "13123",
      label: "hello",
      content:
        "this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. ",
    },
    {
      id: "ASDASD",
      label: "hello",
      content:
        "this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. ",
    },
    {
      id: "asdfasdf",
      label: "hello",
      content:
        "this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. this is some example content. ",
    },
  ];
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
