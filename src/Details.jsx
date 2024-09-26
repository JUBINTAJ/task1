import React, { useContext } from 'react'
import { Studentcontext } from './context/Blogcontext'

function Details() {

    const {getage,getbatch,getname}=useContext(Studentcontext)
  return (
    <div>
        <h1>{getname}</h1>
        <p>{getbatch}</p>
        <p>{getage}</p>
    </div>
  )
}

export default Details