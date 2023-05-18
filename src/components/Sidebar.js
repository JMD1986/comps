import Link from "./link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
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
    <div className="sticky top-0 overflow-y-scroll flex flex-col align-start">
      {renderedLinks}
    </div>
  );
}
export default Sidebar;
