import React, { useState } from 'react'
import SingleTodo from './SingleTodo/SingleTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import styles from "./Module css/Inprogress.css"

const Inprogress = () => {
  const [arr, setArr] = useState([{ task: "Project F",color:"pink" }, { task: "Project G" ,color:"gold"},{ task: "Project H",color:"skyblue" }, { task: "Project I",color:"red" }]);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr(prevArr => [...prevArr, newObj]);
  };

  return (
    <div id='singleColumn2'>
    <div id='topsection'>
    <h3>In Progress</h3>
    <FontAwesomeIcon icon={faEllipsis} />
    </div>    

 <div id='bottomsecton'>
    {arr.map((e)=>
      <SingleTodo e={e}/>

)}
<button onClick={handleclick}>+  Add a card</button>
    </div>    </div>
  )
}

export default Inprogress
