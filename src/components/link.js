import useNavigation from "../hooks/use-navgiation";
import classNames from "classnames";
function Link({ to, children, className }) {
  const { navigate } = useNavigation();
  const classes = classNames("text-blue-500", className);
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
export default Link;
