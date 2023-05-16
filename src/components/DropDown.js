import { useState } from "react";
function DropDown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("");
  const renderedOptions = options.map((option) => {
    return <div key={option.value}> {option.label}</div>;
  });
  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  const selectOption = () => {};
  const checkState = () => {
    console.log(options);
  };
  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
export default DropDown;
