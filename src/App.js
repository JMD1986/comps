import "./App.css";
//@ts-ignore
import Sidebar from "./components/Sidebar";
import Route from "./components/route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropDownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import Mortgage from "./components/Mortgage";
import FlightPage from "./pages/FlightPage";
import LikeButton from "./components/LikeButton";
import ReversingLights from "./components/ReversingLights";
import StarRatingPage from "./pages/StarRatingPage";
import ToDoListPage from "./pages/ToDoListPage";
import TrafficLightPage from "./pages/TrafficLightPage";
import CheckBoxesPage from "./pages/CheckBoxesPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/mortgage">
          <Mortgage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
        <Route path="/flight">
          <FlightPage />
        </Route>
        <Route path="/likeButton">
          <LikeButton />
        </Route>
        <Route path="/lights">
          <ReversingLights />
        </Route>
        <Route path="/stars">
          <StarRatingPage />
        </Route>
        <Route path="/toDo">
          <ToDoListPage />
        </Route>
        <Route path="/trafficLight">
          <TrafficLightPage />
        </Route>
        <Route path="/checkBoxes">
          <CheckBoxesPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
