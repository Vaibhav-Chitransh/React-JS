import React, { useState } from "react";
import "./Todo.css";
import Form from "./Form";
import List from "./List";
import TodoDate from "./TodoDate";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleClearAll = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo App</h1>
          <TodoDate />
        </header>
        <Form task={task} setTask={setTask} />
        <section className="task-list">
          <ul>
            {task.map((currTask, idx) => (
              <List
                task={task}
                setTask={setTask}
                currTask={currTask}
                key={idx}
              />
            ))}
          </ul>
        </section>
        <section>
          <button
            className={`clear-all-btn`}
            style={task.length === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}
            onClick={() => handleClearAll()}
          >
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;
