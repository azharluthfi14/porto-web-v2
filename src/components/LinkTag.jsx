import React from "react";
import PropTypes from "prop-types";

const LinkTag = ({ children, url, style }) => {
  return (
    <a
      href={url}
      target="_blank"
      className={style}
      rel="noopener noreferrer"
      aria-label="External Link"
    >
      {children}
    </a>
  );
};

LinkTag.propTypes = {
  children: PropTypes.any.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default LinkTag;
