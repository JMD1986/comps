import { render } from "@testing-library/react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

import { useState } from "react";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={item.id}>
        <div onClick={() => setExpandedIndex(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
export default Accordion;
