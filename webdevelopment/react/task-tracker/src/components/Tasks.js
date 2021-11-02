import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, removeTask, highlightcolor, useLightMode }) => {
  return (
    <div className="taskscontainer">
      {tasks.map((task) => (
        <Task
          highlightcolor={highlightcolor}
          key={task.id}
          task={task}
          removeTask={removeTask}
          useLightMode={useLightMode}
        />
      ))}
    </div>
  );
};

export default Tasks;
