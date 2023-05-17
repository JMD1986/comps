import { useContext } from "react";
import NavigationContext from "../context/navigation";
function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
export default Link;
