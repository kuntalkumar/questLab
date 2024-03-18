import React from 'react'
import Todo from './Colums/Todo'
import Inprogress from './Colums/Inprogress'
import Review from './Colums/Review'
import Done from './Colums/Done'
import "../App.css"
const Assignment = () => {


 

  return (
    <div className='App'
      id="parent"
      
    >
      <Todo />
      <Inprogress />
      <Review />
      <Done />
    </div>
  );
}

export default Assignment
