import { Outlet } from "react-router-dom";
import Sidebar from "~/components/sidebar";

const WebLayout = () => {
  return (
    <>
      <Sidebar />
      <main className="md:ml-[250px] ml-[80px] p-4">
        <Outlet />
      </main>
    </>
  );
};

export default WebLayout;
