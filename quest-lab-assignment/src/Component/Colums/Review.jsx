import React, { useState } from 'react';
import SingleTodo from './SingleTodo/SingleTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styles from "./Module css/Review.css"

const Review = () => {
  const [arr, setArr] = useState([{ task: "Project J",color:"silver" }, { task: "Project K",color:"blue" }]);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr(prevArr => [...prevArr, newObj]);
  };

  return (
    <div id='singleColumn3'>
      <div id='topsection'>
        <h3>Review</h3>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>

      <div id='bottomsecton'>
        {arr.map((e, index) => (
          <SingleTodo key={index} e={e} />
        ))}
        <button onClick={handleclick}>+  Add a card</button>
      </div>
    </div>
  );
};

export default Review;
