import React from "react";

const LinkTag = ({ children, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label="External Link">
      {children}
    </a>
  );
};

export default LinkTag;
