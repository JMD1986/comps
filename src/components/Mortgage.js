import { useState } from "react";

export default function Mortgage() {
  const [setMonthlyPayment, monthlyPayment] = useState(0);
  const [setTotalInterest, totalInterest] = useState(0);
  const [setTotalPayment, totalPayment] = useState();
  const [setLoanAmount, loanAmount] = useState();
  const [setInterest, interest] = useState();
  const [setTerm, term] = useState(0);

  let numberOfPayments = term * 12;
  let interestRate = totalInterest / 12;

  const calculateMonthlyPayment = () => {
    let payment =
      loanAmount(interestRate(1 + interestRate) ** numberOfPayments) /
      ((1 + interestRate) ** numberOfPayments - 1);
    return payment;
  };
  const calculateTotalPayment = () => {
    return calculateMonthlyPayment * numberOfPayments;
  };
  const calculateTotalInterest = () => {};
  const MonthlyPayment = () => {};

  const TotalPayment = () => {};
  const TotalInterest = () => {};
  const handleLoan = (event) => {
    event.preventDefault();
    setLoanAmount(event.target.value);
  };
  const handleInterest = (event) => {
    event.preventDefault();
    setInterest(event.target.value);
  };
  const handleTerm = (event) => {
    event.preventDefault();
    setTerm(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <label>Loan Amount</label>

          <input
            className="p-1 m-3 bg-gray-50 border border-gray-300"
            type="number"
            onChange={handleLoan}
          />
        </div>

        <div>
          <label>Interest Rate</label>

          <input
            className="p-1 m-3 bg-gray-50 border border-gray-300"
            type="number"
            onChange={handleInterest}
          />
        </div>
        <div>
          <label>Loan Term</label>

          <input
            className="p-1 m-3 bg-gray-50 border border-gray-300"
            type="number"
            onChange={handleTerm}
          />
        </div>
      </form>
      <MonthlyPayment />
      <TotalPayment />
      <TotalInterest />
    </div>
  );
}
