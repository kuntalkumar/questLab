import React, { useState } from 'react';
import SingleTodo from './SingleTodo/SingleTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './column.css';

const Review = () => {
  const [arr, setArr] = useState([{ task: "Project J" }, { task: "Project K" }]);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr(prevArr => [...prevArr, newObj]);
  };

  return (
    <div id='singleColumn'>
      <div id='topsection'>
        <h3>Review</h3>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>

      <div id='bottomsecton'>
        {arr.map((e, index) => (
          <SingleTodo key={index} task={e.task} />
        ))}
        <button onClick={handleclick}>+  Add a card</button>
      </div>
    </div>
  );
};

export default Review;
