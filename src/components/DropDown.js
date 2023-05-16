import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("");
  const selectOption = (value) => {
    setIsOpen(false);
    onChange(value);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => selectOption(option)}
        key={option.value}
      >
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

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}
export default DropDown;
