import { useSelector } from "react-redux";

export const useActiveTab = () => useSelector((state) => state.web.activeTab)
export const useTheme = () => useSelector((state) => state.web.theme)