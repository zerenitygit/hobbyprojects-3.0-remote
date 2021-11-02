import AddMenu from "./components/AddMenu";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [highlightcolor, sethighlightcolor] = useState("red");

  const [spanstylebackground, setSpanStyleBackground] = useState("red");
  const [spantextcolor, setSpanTextColor] = useState("white");
  const [spantext, setSpanText] = useState("Red");
  const [color, setColor] = useState("rgb(255, 77, 77");
  const [useLightMode, setUseLightMode] = useState(false);

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function addToList(addedTask) {
    const id = Math.floor(Math.random() * 1000000) + 1;
    const newTask = { ...addedTask, id };
    setTasks([...tasks, newTask]);
  }

  function removeAllTasks() {
    setTasks([]);
  }

  function setHighlightColor(color) {
    sethighlightcolor(color.highlightstyle);

    setSpanStyleBackground(color.backgroundcolor);
    setSpanTextColor(color.titlecolor);
    setSpanText(color.title);
  }

  function rgbhighlightsetter(color) {
    sethighlightcolor(color);
    setSpanText("Custom");
    setSpanStyleBackground("");
    setSpanTextColor("black");
  }

  function switchlightdarkmode() {
    setUseLightMode(!useLightMode);
  }

  return (
    <div className={useLightMode ? "appcontainer lightmode" : "appcontainer"}>
      <Header
        showAddMenu={showAddMenu}
        color={color}
        setColor={setColor}
        rgbhighlightsetter={rgbhighlightsetter}
        spanstylebackground={spanstylebackground}
        spantextcolor={spantextcolor}
        spantext={spantext}
        setHighlightColor={setHighlightColor}
        removeAllTasks={removeAllTasks}
        onShowAddMenu={() => setShowAddMenu(!showAddMenu)}
        switchlightdarkmode={switchlightdarkmode}
        useLightMode={useLightMode}
      />
      {showAddMenu && (
        <AddMenu useLightMode={useLightMode} addToList={addToList} />
      )}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          removeTask={removeTask}
          highlightcolor={highlightcolor}
          useLightMode={useLightMode}
        />
      ) : (
        <div
          className={useLightMode ? "noaddedtasks lightmode" : "noaddedtasks"}
        >
          No Added Tasks...
        </div>
      )}
    </div>
  );
}

export default App;
