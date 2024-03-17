import React from 'react'
import "./Singletodo.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faMessage } from '@fortawesome/free-solid-svg-icons'
const SingleTodo = ({task}) => {


  return (
    <div id='single'>
    <div id='priority'>


            
    </div>
    <div id='textP'>
{task}    </div>
    <div id='third'>
    <div id='icon'>
    <FontAwesomeIcon icon={faBars} />
    </div>
    <div id='comment'>
    <FontAwesomeIcon icon={faMessage} />
    </div>
    </div>
    
    </div>
  )
}

export default SingleTodo
