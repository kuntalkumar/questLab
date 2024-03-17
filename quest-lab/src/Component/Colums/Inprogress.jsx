import React, { useState } from 'react'
import SingleTodo from './SingleTodo/SingleTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import "./column.css"

const Inprogress = () => {
  const [arr, setArr] = useState([{ task: "Project F" }, { task: "Project G" },{ task: "Project H" }, { task: "Project I" }]);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr(prevArr => [...prevArr, newObj]);
  };

  return (
    <div id='singleColumn'>
    <div id='topsection'>
    <h3>In Progress</h3>
    <FontAwesomeIcon icon={faEllipsis} />
    </div>    

 <div id='bottomsecton'>
    {arr.map((e)=>
      <SingleTodo task={e.task}/>

)}
<button onClick={handleclick}>+  Add a card</button>
    </div>    </div>
  )
}

export default Inprogress
