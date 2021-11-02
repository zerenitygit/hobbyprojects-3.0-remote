import { MdDeleteSweep } from "react-icons/md";

const ClearAllTasks = ({ removeAllTasks }) => {
  return (
    <button onClick={removeAllTasks} className="clearalltasks">
      Clear All Tasks
      <span>
        <MdDeleteSweep className="clearalltaskstrashcan" />
      </span>
    </button>
  );
};

export default ClearAllTasks;
