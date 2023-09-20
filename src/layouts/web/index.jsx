import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Sidebar from "~/components/sidebar";

const WebLayout = () => {
  return (
    <>
      <Sidebar />
      <Toaster position="top-center" />
      <main className="md:ml-[250px] ml-[80px] p-4 text-woodsmoke-300">
        <Outlet />
      </main>
    </>
  );
};

export default WebLayout;
