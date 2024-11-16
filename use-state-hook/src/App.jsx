import React from 'react'
import Parent from './components/Parent';
import InputComp from './components/InputComp';
import DisplayComp from './components/DisplayComp';
import { useState } from 'react';

const App = () => {
  const [val, setVal] = useState('Vaibhav');

  return (
    <>
      <Parent />
      <InputComp val={val} setVal={setVal} />
      <DisplayComp val={val} />
    </>
  )
}

export default App
