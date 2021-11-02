import ChangeHighlightColor from "./ChangeHighlightColor";
import ClearAllTasks from "./ClearAllTasks";
import LightDarkMode from "./LightDarkMode";
import ShowAddMenuButton from "./ShowAddMenuButton";

const Header = ({
  removeAllTasks,
  onShowAddMenu,
  setHighlightColor,
  spanstylebackground,
  spantextcolor,
  spantext,
  color,
  setColor,
  rgbhighlightsetter,
  showAddMenu,
  switchlightdarkmode,
  useLightMode,
}) => {
  return (
    <div className="header">
      <div
        className={useLightMode ? "headersection1 lightmode" : "headersection1"}
      >
        <h1>Task Tracker</h1>
      </div>
      <div className="headersection2">
        <LightDarkMode
          useLightMode={useLightMode}
          switchlightdarkmode={switchlightdarkmode}
        />
        <ClearAllTasks removeAllTasks={removeAllTasks} />
        <ChangeHighlightColor
          color={color}
          setColor={setColor}
          rgbhighlightsetter={rgbhighlightsetter}
          spanstylebackground={spanstylebackground}
          spantextcolor={spantextcolor}
          spantext={spantext}
          setHighlightColor={setHighlightColor}
          useLightMode={useLightMode}
        />
        <ShowAddMenuButton
          showAddMenu={showAddMenu}
          onShowAddMenu={onShowAddMenu}
        />
      </div>
    </div>
  );
};

export default Header;
