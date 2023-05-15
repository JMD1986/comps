import { GoBell, GoCloudDownload, GoDashboard } from "react-icons/go";
import "./App.css";
import Button from "../components/Button";
function App() {
  const foo = () => {
    console.log("hello");
  };

  return (
    <div className="App">
      <div>
        <Button primary onClick={foo}>
          <GoBell />
          test
        </Button>
      </div>
      <div>
        <Button className="mb-5" onMouseOver={foo} success rounded outline>
          <GoCloudDownload />
          other test
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoDashboard />
          new test
        </Button>
      </div>
      <div>
        <Button primary>hello</Button>
      </div>
      <div>
        <Button warning>yes</Button>
      </div>
      <div>
        <Button>no</Button>
      </div>
    </div>
  );
}

export default App;
