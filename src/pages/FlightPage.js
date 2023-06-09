// Requirements
// The user can choose from two flight options: "One-way flight" and "Return flight".
// Input date fields
// The date input fields represent the departure date and return dates.
// The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.
// Form validation should be done upon submission for invalid fields:
// Dates are in the past.
// Return date is before the departure date.
// Upon successful submission, a message is displayed informing the user of the selection:
// One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
// Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"

import { useState } from "react";
import DropDown from "../components/DropDown";
import Button from "../components/Button";

// Here's an example of the component, with both "One-way flight" and "Return flight" options.
function FlightPage() {
  const [flightType, setFlightType] = useState("one way");
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const [message, setMessage] = useState("");

  const flightTypeOptions = [
    {
      label: "One Way",
      value: "One Way",
    },
    {
      label: "Return",
      value: "Return",
    },
  ];
  const flightTypeSelect = (option) => {
    setFlightType(option.value);
    console.log(flightType);
  };
  const departureDateSelect = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setDepartureDate(event.target.value);
  };
  const returnDateSelect = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setReturnDate(event.target.value);
  };

  const checkIfBeforeToday = () => {
    const now = new Date();
    const departDate = new Date(departureDate);
    const returnDat = new Date(returnDate);
    if (departDate < now || returnDat < now) {
      return true;
    } else return false;
  };
  const checkIfArrivalBeforeDeparture = () => {
    const departDate = new Date(departureDate);
    const returnDat = new Date(returnDate);
    if (returnDat < departDate) {
      return true;
    } else return false;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkIfBeforeToday()) {
      setMessage("Please Select Future Date");
    }
    if (checkIfArrivalBeforeDeparture()) {
      setMessage("Return must be after depature");
    }
    if (
      checkIfArrivalBeforeDeparture() === false &&
      checkIfBeforeToday() === false
    ) {
      if (flightType === "One Way")
        setMessage(`you are one a ${flightType} from ${departureDate}`);
      if (flightType === "Return")
        setMessage(
          `you are one a ${flightType} from ${departureDate} and returning on ${returnDate}`
        );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <DropDown
          options={flightTypeOptions}
          value={{ label: flightType }}
          onChange={flightTypeSelect}
        />
        <div>
          <input type="date" onChange={departureDateSelect} />
        </div>
        <div>
          {flightType === "Return" && (
            <input type="date" onChange={returnDateSelect} />
          )}
        </div>
        <Button>Book my flight</Button>
        {flightType}
        {message}
      </form>
    </div>
  );
}

export default FlightPage;
