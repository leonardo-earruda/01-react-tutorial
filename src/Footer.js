import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>{length > 1 ? `${length} list items` : `${length} list item`}</p>
    </footer>
  );
};

export default Footer;
