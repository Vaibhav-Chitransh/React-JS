import React, { useState } from "react";

const Form = ({ task, setTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const str = inputValue.replace(/\s+/g, " ").trim();

    if (!inputValue) return;
    if (task.includes(str)) {
      setInputValue("");
      alert("Same Task already present, please enter a new task");
      return;
    }

    setTask((prevTask) => [...prevTask, str]);
    setInputValue("");
  };

  return (
    <>
      <section className="form">
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div>
            <input
              type="text"
              className="todo-input"
              placeholder="Enter the task"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
