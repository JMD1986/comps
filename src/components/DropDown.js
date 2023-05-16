import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
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
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}
export default DropDown;
