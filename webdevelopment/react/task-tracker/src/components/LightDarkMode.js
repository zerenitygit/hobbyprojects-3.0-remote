import { FaRegMoon } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";

const LightDarkMode = ({ switchlightdarkmode, useLightMode }) => {
  return (
    <div>
      <button
        onClick={switchlightdarkmode}
        className={useLightMode ? "lightdarkmode lightmode" : "lightdarkmode"}
      >
        {useLightMode ? "Light Mode" : "Dark Mode"}
        <span>
          {useLightMode ? (
            <RiSunLine className="sun" />
          ) : (
            <FaRegMoon className="moon" />
          )}
        </span>
      </button>
    </div>
  );
};

export default LightDarkMode;
