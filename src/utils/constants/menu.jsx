import { RxComponent1 } from "react-icons/rx";
import { BiHomeHeart } from "react-icons/bi";

export const SIDEBAR_MENU = [
  {
    path: "/",
    label: "Home",
    icon: <BiHomeHeart className="w-[24px] h-[24px]" />,
  },
  {
    path: "/examples",
    label: "Examples",
    icon: <RxComponent1 className="w-[24px] h-[24px]" />,
  },
];
