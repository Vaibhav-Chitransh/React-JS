import React, { useState, useEffect } from "react";

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

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
      <h2>{dateTime}</h2>
    </>
  );
};

export default TodoDate;
