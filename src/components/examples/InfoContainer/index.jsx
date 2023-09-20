import { BsInfoLg } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";
import propTypes from "prop-types";
import classNames from "classnames";

const InfoContainer = ({ type, text }) => {
  let icon_classNames = classNames("w-3 h-3 font-bold", {
    "text-emerald-300": type === "success",
    "text-red-300": type === "error",
    "text-yellow-300": type === "info",
  });

  return (
    <div
      className={classNames(
        "flex flex-row gap-2 items-start flex-start border w-full max-w-[820px] p-4 bg-opacity-20 rounded-[16px]",
        {
          "bg-emerald-800  border-emerald-900": type === "success",
          "bg-red-800  border-red-900": type === "error",
          "bg-yellow-800  border-yellow-900": type === "info",
        }
      )}
    >
      <div
        className={classNames(
          "w-4 h-4 rounded-full  bg-opacity-20 flex justify-center items-center",
          {
            "bg-emerald-200": type === "success",
            "bg-red-200": type === "error",
            "bg-yellow-200": type === "info",
          }
        )}
      >
        {type === "info" && <BsInfoLg className={icon_classNames} />}
        {type === "success" && <MdOutlineDone className={icon_classNames} />}
        {type === "error" && <AiOutlineWarning className={icon_classNames} />}
      </div>
      <span
        className={classNames(
          "flex-1 leading-6 font-normal text-sm text-emerald-200 antialiased -mt-[4px] tracking-[0.001rem]",
          {
            "text-emerald-200": type === "success",
            "text-red-200": type === "error",
            "text-yellow-200": type === "info",
          }
        )}
      >
        {text}
      </span>
    </div>
  );
};

InfoContainer.propTypes = {
  type: propTypes.oneOf(["error", "info", "success"]),
  text: propTypes.string.isRequired,
};

export default InfoContainer;
