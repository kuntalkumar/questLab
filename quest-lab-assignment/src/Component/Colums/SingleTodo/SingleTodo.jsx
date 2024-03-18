import React from 'react'
import "./Singletodo.css"
import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faBars, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMessage } from '@fortawesome/free-solid-svg-icons'
const SingleTodo = ({e}) => {

  const {task,color}=e

  return (
    <div id='single'>
    <div id='priority' style={{backgroundColor:color}}>


            
    </div>
    <div id='textP'>
{e.task}    </div>
    <div id='third'>
    <div id='icon'>
    <FontAwesomeIcon icon={faBars} style={{color:"grey"}} />
    </div>
    <div id='comment'>
    <FontAwesomeIcon icon={faMessage}  style={{color:"grey"}}/>
    </div>
    </div>
    
    </div>
  )
}

export default SingleTodo
