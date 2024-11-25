import React, { useEffect } from "react";
import { deletePost, getPost } from "../api/PostApi";

const Posts = ({data, setData, addData, setAddData, btn, setBtn, updateId, setUpdateId}) => {
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedData = data.filter((val) => val.id !== id);
        const updatedDataWithNewIds = updatedData.map((val, index) => ({
          ...val,
          id: index + 1,
        }));
        setData(updatedDataWithNewIds);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = (val) => {
    setAddData({title: val.title, body: val.body, btn});
    setUpdateId(val.id);
    setBtn('Edit');
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-10 gap-8">
      {data.map((val) => {
        return (
          <div key={val.id} className="p-3 shadow-lg flex flex-col gap-3 justify-between">
            <div>
              <div className="flex justify-between">
                <h1 className="font-bold">{val.title}</h1>
                <h2 className="text-md">{val.id}</h2>
              </div>
              <p className="mt-3">{val.body}</p>
            </div>
            <div className="flex justify-end gap-3 text-white mt-2">
              <button className="border px-2 py-1 bg-green-700 rounded" onClick={() => handleUpdatePost(val)}>
                Edit
              </button>
              <button
                className="border px-2 py-1 bg-red-700 rounded"
                onClick={() => handleDelete(val.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
