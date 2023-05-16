import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("");
  const divEl = useRef();
  const selectOption = (value) => {
    setIsOpen(false);
    onChange(value);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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

  return (
    <div ref={divEl} className="w-48 relative">
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
