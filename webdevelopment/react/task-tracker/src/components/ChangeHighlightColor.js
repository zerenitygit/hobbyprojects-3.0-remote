import { useState } from "react";
import ChangeHighlightColorMenu from "./ChangeHighlightColorMenu";
import { ChromePicker } from "react-color";

const ChangeHighlightColor = ({
  setHighlightColor,
  spanstylebackground,
  spantextcolor,
  spantext,
  color,
  setColor,
  rgbhighlightsetter,
  useLightMode,
}) => {
  const [openColorMenu, setOpenColorMenu] = useState(false);
  const [showCustomColorMenu, setShowCustomColorMenu] = useState(false);

  function openHighlightColorMenu() {
    setOpenColorMenu(!openColorMenu);
    if (showCustomColorMenu) {
      setShowCustomColorMenu(false);
    }
  }

  function closeColorMenus() {
    setOpenColorMenu(false);
    setShowCustomColorMenu(false);
  }

  function openCustomColorMenu() {
    setShowCustomColorMenu(true);
  }

  return (
    <div className="highlightcolor">
      <button
        style={
          useLightMode
            ? { background: "white" }
            : { background: "rgb(44, 45, 48)", color: "white" }
        }
        onClick={openHighlightColorMenu}
      >
        <div>
          Highlight Color:{" "}
          <span
            style={
              spantext === "Custom"
                ? {
                    color: spantextcolor,
                    display: "inline-block",
                    padding: "3px 6px",
                    marginTop: "4px",
                    background:
                      "linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple)",
                    borderRadius: "100px",
                  }
                : {
                    borderRadius: "100px",
                    padding: "3px 6px",
                    color: spantextcolor,
                    background: spanstylebackground,
                    display: "inline-block",
                    marginTop: "4px",
                  }
            }
          >
            {spantext}
          </span>
        </div>
      </button>
      {openColorMenu && (
        <ChangeHighlightColorMenu
          setHighlightColor={setHighlightColor}
          openCustomColorMenu={openCustomColorMenu}
          closeColorMenus={closeColorMenus}
          openHighlightColorMenu={openHighlightColorMenu}
        />
      )}
      {showCustomColorMenu && (
        <ChromePicker
          onChange={(updatedColor) => {
            setColor(updatedColor.hex);
            rgbhighlightsetter(color);
          }}
          color={color}
          className="chromepicker"
        />
      )}
    </div>
  );
};

export default ChangeHighlightColor;
