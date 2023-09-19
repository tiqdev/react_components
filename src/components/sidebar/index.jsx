import { SIDEBAR_MENU } from "~/utils/constants/menu";
import MenuItem from "./components/menu_item";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-[250px] w-[80px] h-screen bg-woodsmoke-950 border-r-[2px] border-woodsmoke-300 fixed top-0 left-0 p-4">
      <Link
        to="/"
        className="flex flex-row text-woodsmoke-300 font-bold mb-4 text-2xl"
      >
        <span className="text-woodsmoke-500">.</span> tiqdev UI
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
