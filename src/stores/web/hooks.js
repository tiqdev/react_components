import { useSelector } from "react-redux";

export const useActiveTab = () => useSelector((state) => state.web.activeTab)