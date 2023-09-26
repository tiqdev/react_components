import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

const MenuItem = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        classNames(
          "h-9 transition-colors flex items-center md:justify-start justify-center gap-2 rounded text-15 font-medium",
          {
            "text-woodsmoke-700": !isActive,
            "text-woodsmoke-300": isActive,
          }
        )
      }
    >
      <div>{item.icon}</div>
      <span className="md:block hidden">{item.label}</span>
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
