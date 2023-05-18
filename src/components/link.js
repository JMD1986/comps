import useNavigation from "../hooks/use-navgiation";
import classNames from "classnames";
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
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
