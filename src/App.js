import "./App.css";
import Link from "./components/link";
import Route from "./components/route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";

function App() {
  return (
    <div className="App">
      <Link to="/accordion">go to accordion</Link>
      <Link to="/dropdown">go to dropdown</Link>
      <div>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
