import React from "react";
import PropTypes from "prop-types";

const Button = ({
  size,
  bgColor,
  textColor,
  children,
  hoverBgColor,
  hoverTextColor,
  clickEvent,
}) => {
  return (
    <button
      onClick={clickEvent}
      className={`flex justify-center items-center py-3.5 px-7 ease-in-out duration-300 rounded-md bg-${bgColor} text-${textColor}
       ${size === "lg" ? "text-xl" : "text-base"} hover:bg-${hoverBgColor} hover:${hoverTextColor}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.any,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  clickEvent: PropTypes.func,
};

export default Button;
