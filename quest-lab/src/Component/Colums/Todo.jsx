import React, { useState } from "react";
import SingleTodo from "./SingleTodo/SingleTodo";
import "./column.css";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Todo = () => {
  const [arr, setArr] = useState([{ task: "Project A" }, { task: "Project B" },{ task: "Project C" }, { task: "Project D" },{ task: "Project E" }]);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr((prevArr) => [...prevArr, newObj]);
  };

  return (
    <div id="singleColumn">
      <div id="topsection">
        <h3>Todo</h3>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div id="bottomsecton">
        {arr.map((e) => (
          <SingleTodo task={e.task} />
        ))}
        <button onClick={handleclick}> + Add a card</button>
      </div>
    </div>
  );
};

export default Todo;
