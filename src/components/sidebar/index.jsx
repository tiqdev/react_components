import { SIDEBAR_MENU } from "~/utils/constants/menu";
import MenuItem from "./components/MenuItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-[250px] w-[80px] h-screen bg-woodsmoke-950 border-r-[1px] border-woodsmoke-300 border-opacity-25 fixed top-0 left-0 p-4">
      <Link
        to="/"
        className="flex flex-row text-woodsmoke-300 font-bold mb-4 text-2xl md:justify-start justify-center"
      >
        <span className="text-woodsmoke-500">.</span>{" "}
        <span className="md:block hidden">tiqdev UI</span>
        <span className="md:hidden block">UI</span>
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
