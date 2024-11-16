import React from 'react'

const InputComp = ({val, setVal}) => {
    const handleChange = (e) => {
        setVal(e.target.value);
    }

  return (
    <>
        <input type='text' placeholder='enter your name' value={val} onChange={(e) => handleChange(e)}/>
    </>
  )
}

export default InputComp;