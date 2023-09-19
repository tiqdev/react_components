import { SIDEBAR_MENU } from "~/utils/constants/menu";
import MenuItem from "./components/menu_item";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-[250px] w-[80px] h-screen bg-white border-r border-black-600 fixed top-0 left-0 p-4">
      <Link to="/" className="flex flex-row text-black-700 font-bold mb-4">
        <span className="text-black-950">.</span> tiqdev
      </Link>
      <div className="flex flex-col">
        {SIDEBAR_MENU.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
