import Link from "./link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
    { label: "Mortgage", path: "/mortgage" },
    { label: "Flight", path: "/flight" },
    { label: "Like Button", path: "/likeButton" },
    { label: "Lights", path: "/lights" },
    { label: "Stars", path: "/stars" },
    { label: "To Do List", path: "/toDo" },
    { label: "Traffic Light", path: "/trafficLight" },
    { label: "Check Boxes", path: "/checkBoxes" },
    { label: "Job Board", path: "/jobBoard" },
    { label: "Contact Form", path: "/contactForm" },
    { label: "Progress Bar", path: "/progressBar" },
    { label: "Tic Tac Toe", path: "/ticTacToe" },
    { label: "StopWatch", path: "/stopWatch" },
    { label: "NumberTable", path: "/numberTable" },
    { label: "Wack-a-mole", path: "/wackAMole" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        className="mb-3"
        key={link.label}
        to={link.path}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}
export default Sidebar;
