import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import CustomMenuButton from "./CustomMenuButton";

const ChangeHighlightColorMenu = ({
  openCustomColorMenu,
  closeColorMenus,
  setHighlightColor,
}) => {
  const [colors, setColors] = useState([
    {
      id: 1,
      title: "Red",
      titlecolor: "white",
      backgroundcolor: "rgb(245, 87, 87)",
      highlightstyle: " rgb(245, 87, 87)",
    },
    {
      id: 2,
      title: "Blue",
      titlecolor: "white",
      backgroundcolor: "rgb(61, 112, 255)",
      highlightstyle: "rgb(61, 112, 255)",
    },
    {
      id: 3,
      title: "Yellow",
      titlecolor: "black",
      backgroundcolor: "rgb(255, 255, 128)",
      highlightstyle: "rgb(255, 255, 128) ",
    },
    {
      id: 4,
      title: "Purple",
      titlecolor: "white",
      backgroundcolor: "rgb(119, 83, 172)",
      highlightstyle: "rgb(119, 83, 172)",
    },
    {
      id: 5,
      title: "Pink",
      titlecolor: "black",
      backgroundcolor: "rgb(213, 110, 247)",
      highlightstyle: "rgb(213, 110, 247)",
    },
    {
      id: 6,
      title: "Green",
      titlecolor: "black",
      backgroundcolor: "rgb(114, 185, 40)",
      highlightstyle: "rgb(114, 185, 40)",
    },
    {
      id: 7,
      title: "Brown",
      titlecolor: "white",
      backgroundcolor: "rgb(128, 91, 58)",
      highlightstyle: "rgb(128, 91, 58)",
    },
    {
      id: 8,
      title: "Orange",
      titlecolor: "black",
      backgroundcolor: "rgb(255, 155, 0)",
      highlightstyle: "rgb(255, 155, 0)",
    },
  ]);

  return (
    <div className="changehighlightcolormenu">
      <ul>
        <CustomMenuButton openCustomColorMenu={openCustomColorMenu} />
        {colors.map((color) => (
          <li
            onClick={() => setHighlightColor(color)}
            key={color.id}
            style={{
              background: color.backgroundcolor,
              color: color.titlecolor,
            }}
          >
            {color.title}
          </li>
        ))}
      </ul>
      <TiDeleteOutline onClick={closeColorMenus} className="colormenuclose" />
    </div>
  );
};

export default ChangeHighlightColorMenu;
