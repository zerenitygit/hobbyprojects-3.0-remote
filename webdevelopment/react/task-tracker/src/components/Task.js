import { RiDeleteBin2Line } from "react-icons/ri";

const Task = ({ task, removeTask, highlightcolor, useLightMode }) => {
  const highlight = {
    borderTop: `${highlightcolor} 10px solid`,
  };

  return (
    <div
      className={useLightMode ? "task lightmode" : "task"}
      style={task.sethighlight ? highlight : null}
    >
      <div className="uppertasktext">{task.task}</div>
      <div className="lowertasktext">{task.when}</div>
      <div className="taskdeletecontainer">
        <RiDeleteBin2Line
          className="taskdelete"
          onClick={() => removeTask(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
