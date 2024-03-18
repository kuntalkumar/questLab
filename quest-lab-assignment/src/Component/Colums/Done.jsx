import React, { useState } from 'react'
import SingleTodo from './SingleTodo/SingleTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import styles from "./Module css/Done.css"
const Done = () => {
  const [arr, setArr] = useState([{ task: "Project L",color:"red" }, { task: "Project M" ,color:"blue"}]);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr(prevArr => [...prevArr, newObj]);
  };

  return (
    <div id='singleColumn4'>
       <div id='topsection' >
    <h3>Done</h3>
    <FontAwesomeIcon icon={faEllipsis} />
    </div>
    <div id='bottomsecton'>
    {arr.map((e)=>
  <SingleTodo e={e} />

)}
<button id='btn' onClick={handleclick}

>+  Add a card</button>
    </div>    </div>
  )
}

export default Done
