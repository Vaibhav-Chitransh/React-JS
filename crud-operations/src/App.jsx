import React, { useState } from "react";
import Posts from "./components/Posts";
import Form from "./components/Form";

const App = () => {
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState({title: '', body: ''});
  const [btn, setBtn] = useState('Add');
  const [updateId, setUpdateId] = useState(-1);

  return (
    <>
      <section>
        <h1 className="font-bold mb-5 text-2xl text-center">CRUD Operations</h1>
        <Form data={data} setData={setData} addData={addData} setAddData={setAddData} btn={btn} setBtn={setBtn} updateId={updateId} setUpdateId={setUpdateId} />
      </section>
      <section>
        <Posts data={data} setData={setData} addData={addData} setAddData={setAddData} btn={btn}  setBtn={setBtn} updateId={updateId} setUpdateId={setUpdateId} />
      </section>
    </>
  );
};

export default App;
