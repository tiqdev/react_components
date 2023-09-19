import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

const MenuItem = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        classNames(
          "h-9 transition-colors flex items-center justify-start gap-2 rounded text-15 font-medium",
          {
            "text-woodsmoke-700": !isActive,
            "text-woodsmoke-300": isActive,
          }
        )
      }
    >
      <di>{item.icon}</di>
      <span>{item.label}</span>
    </NavLink>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
  }),
};

export default MenuItem;
