import React, { useState } from 'react'
import SingleTodo from './SingleTodo/SingleTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import "./column.css"
const Done = () => {
  const [arr, setArr] = useState([{ task: "Project L",color:"orange" }, { task: "Project M" ,color:"pink"}]);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr(prevArr => [...prevArr, newObj]);
  };

  return (
    <div id='singleColumn'>
       <div id='topsection'>
    <h3>Done</h3>
    <FontAwesomeIcon icon={faEllipsis} />
    </div>
    <div id='bottomsecton'>
    {arr.map((e)=>
  <SingleTodo task={e.task} />

)}
<button id='btn' onClick={handleclick}

>+  Add a card</button>
    </div>    </div>
  )
}

export default Done
