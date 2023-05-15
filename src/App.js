import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
function App() {
  return (
    <div className="App">
      <div>
        <Button primary>test</Button>
      </div>
      <div>
        <Button success rounded outline>
          other test
        </Button>
      </div>
      <div>
        <Button secondary rounded>
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
