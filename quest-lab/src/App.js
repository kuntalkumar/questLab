import React, { useState } from 'react'
import Assignment from './Component/Assignment'
import Loading from './Component/Loading/Loading'
const App = () => {

  const [loading,setLoading]=useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  return (

    <div >
{
  loading?      <Loading/>:      <Assignment/>


}

    </div>
  )
}

export default App
