import React, { useState } from "react";
import SingleTodo from "./SingleTodo/SingleTodo";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Module css/Todo.css"
const Todo = () => {
  const [arr, setArr] = useState([{ task: "Project A",color:"violet" }, { task: "Project B",color:"yellow" },{ task: "Project C",color:"grey" }, { task: "Project D",color:"red" },{ task: "Project E",color:"purple" }]);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr((prevArr) => [...prevArr, newObj]);
  };

  return (
    <div id="singleColumn1">
      <div id="topsection">
        <h3>Todo</h3>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div id="bottomsecton">
        {arr.map((e) => (
          <SingleTodo e={e} />
        ))}
        <button onClick={handleclick}> + Add a card</button>
      </div>
    </div>
  );
};

export default Todo;
