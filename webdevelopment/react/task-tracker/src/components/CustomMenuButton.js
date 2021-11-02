import React from "react";

const CustomMenuButton = ({ openCustomColorMenu }) => {
  return (
    <li
      onClick={openCustomColorMenu}
      style={{
        background:
          "linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple)",
        color: "black",
      }}
    >
      Custom
    </li>
  );
};

export default CustomMenuButton;
