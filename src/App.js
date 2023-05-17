import "./App.css";
//@ts-ignore
import Sidebar from "./components/Sidebar";
import Route from "./components/route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropDownPage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
