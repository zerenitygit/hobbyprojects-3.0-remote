import React from "react";

const ShowAddMenuButton = ({ onShowAddMenu, showAddMenu }) => {
  return (
    <div className="showaddmenu">
      <button
        onClick={onShowAddMenu}
        style={
          showAddMenu
            ? { background: "rgb(189, 90, 90)" }
            : { background: "rgb(91, 187, 131)" }
        }
      >
        {showAddMenu ? "- Close" : "Show Add Menu +"}
      </button>
    </div>
  );
};

export default ShowAddMenuButton;
