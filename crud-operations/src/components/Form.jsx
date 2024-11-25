import React, { useState } from 'react'
import { postData, updateData } from '../api/PostApi';

const Form = ({data, setData, addData, setAddData, btn, setBtn, updateId, setUpdateId}) => {
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      
      setAddData((prev) => {
        return {...prev, [name]: value};
      });
    }

    const addPostData = async () => {
      const res = await postData(addData);
      console.log(res);

      if(res.status === 201) {
        setData([...data, res.data]);
        setAddData({title: '', body: ''});
      }
    }

    const updatePostData = async (id, data) => {
      try {
        const res = await updateData(id, data);
        console.log(res);

        setData((prev) => {
          return prev.map((curr) => {
            return (curr.id === id) ? res.data : curr;
          })
        });
        setUpdateId(-1);
        setAddData({title: '', body: ''});
        setBtn('Add');
      } catch (error) {
        console.log(error);
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const action = e.nativeEvent.submitter.value;
      if(action === 'Add') {
        addPostData();
      } else if(action === 'Edit') {
        console.log(updateId);
        updatePostData(updateId, addData);
      }
    }

  return (
    <div>
      <form className='m-2 flex justify-center items-center gap-2' onSubmit={handleSubmit}>
        <label htmlFor='title' className='font-bold text-xl'></label>
        <input type='text' id='title' name='title' placeholder='Enter Title here' className='w-96 border border-black p-1' value={addData.title} onChange={handleInputChange} />
        <label htmlFor='body' className='font-bold text-xl'></label>
        <input type='text' id='body' name='body' placeholder='Enter description here...' className='w-96 border border-black p-1' value={addData.body} onChange={handleInputChange} />
        <button type='submit' className='bg-black text-white px-2 py-1 rounded mx-2' value={btn}>{btn}</button>
      </form>
    </div>
  )
}

export default Form
