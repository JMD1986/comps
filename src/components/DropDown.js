import { useState } from "react";
function DropDown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("");
  const selectOption = (value) => {
    setIsOpen(false);
    onSelect(value);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => selectOption(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const checkState = () => {
    console.log(color);
  };
  let content = "Select...";
  if (selection) {
    content = selection.label;
  }
  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
      {/* <button onClick={checkState}>test</button> */}
    </div>
  );
}
export default DropDown;
