import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
function App() {
  return (
    <div className="App">
      <div>
        <Button primary warning>
          test
        </Button>
      </div>
      <div>
        <Button>other test</Button>
      </div>
      <div>
        <Button>new test</Button>
      </div>
      <div>
        <Button>hello</Button>
      </div>
      <div>
        <Button>yes</Button>
      </div>
      <div>
        <Button>no</Button>
      </div>
    </div>
  );
}

export default App;
