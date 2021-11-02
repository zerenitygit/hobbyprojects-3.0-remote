import { useState } from "react";
import ErrorBox from "./ErrorBox";

const AddMenu = ({ addToList, useLightMode }) => {
  const [task, setTask] = useState("");
  const [when, setWhen] = useState("");
  const [sethighlight, setSetHighlight] = useState(false);
  const [showErrorBox, setShowErrorBox] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!task) {
      setShowErrorBox(true);
      setTimeout(() => {
        setShowErrorBox(false);
      }, 3000);
      return;
    }

    addToList({ task, when, sethighlight });

    setTask("");
    setWhen("");
    setSetHighlight(false);
  }

  return (
    <form className={useLightMode ? "lightmode" : null} onSubmit={onSubmit}>
      <div className="addmenutaskdiv">
        <label>Task:</label>
        <input
          className={useLightMode ? "taskinput lightmode" : "taskinput"}
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          placeholder="Required..."
        />
        {showErrorBox && <ErrorBox />}
      </div>
      <div>
        <label>When:</label>
        <input
          className={useLightMode ? "wheninput lightmode" : "wheninput"}
          onChange={(e) => setWhen(e.target.value)}
          value={when}
          type="text"
          placeholder="Optional..."
        />
      </div>
      <div className="sethighlightbox">
        <label>Set Highlight</label>
        <input
          className="sethighlightchecker"
          onChange={(e) => setSetHighlight(e.currentTarget.checked)}
          value={sethighlight}
          type="checkbox"
          checked={sethighlight}
        />
      </div>

      <div className="addtaskbox">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default AddMenu;
