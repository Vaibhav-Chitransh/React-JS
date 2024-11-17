import React, { useEffect, useState } from "react";
import "./Todo.css";
import { MdDelete, MdDone  } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const str = inputValue.replace(/\s+/g, ' ').trim();

    if (!inputValue) return;
    if (task.includes(str)) {
      setInputValue("");
      alert("Same Task already present, please enter a new task");
      return;
    }

    setTask((prevTask) => [...prevTask, str]);
    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        setDateTime(`${date} - ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo App</h1>
          <h2>{dateTime}</h2>
        </header>
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
        <section className="task-list">
          <ul>
            {task.map((currTask, idx) => {
              return <li key={idx} className="todo-item">
                <span>{currTask}</span>
                <div className="icons">
                    <button className="done-btn"><MdDone /></button>
                    <button className="delete-btn"><MdDelete /></button>
                </div>
              </li>;
            })}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Todo;
