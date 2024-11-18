import React, {useState} from "react";
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";

const List = ({task, setTask, currTask, idx}) => {
    const [toggleCheckbox, setToggleCheckbox] = useState(false);

    function handleCheckbox() {
        setToggleCheckbox(!toggleCheckbox);
      }
    
      const handleDelete = (val) => {
        const updatedTask = task.filter((curr) => curr !== val);
        setTask(updatedTask);
      };

  return (
    <>
      <li key={idx} className="todo-item">
        <div className="task-heading">
          <input
            type="checkbox"
            className={`checkbox-btn ${toggleCheckbox ? "checked-box" : ""}`}
            onClick={handleCheckbox}
          />
          <span>{currTask}</span>
        </div>
        <div className="icons">
          <button className="edit-btn">
            <FaPencil />
          </button>
          <button className="delete-btn" onClick={() => handleDelete(currTask)}>
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
};

export default List;
