import React, { useContext, useState } from 'react'
import { Studentcontext } from './context/Blogcontext'
import { useNavigate } from 'react-router'


function Student() {

const {save}=useContext(Studentcontext)
const nav=useNavigate()
  const [name ,setname]=useState('')
  const [batch,setbatch]=useState('')
  const [age ,setage]=useState('')

  const save1=()=>{
    save(name ,batch,age)
    nav('/')

  }


  return (
    <div>
      <h1>Student  details</h1>

      <label htmlFor="">Name</label>
  <input type="text" placeholder='eneter a name'  onChange={(e)=>setname(e.target.value)}/>



      <label htmlFor="">Batch</label>
  <input type="text" placeholder='eneter a Bacth'  onChange={(e)=>setbatch(e.target.value)}/>
  

  <label htmlFor="">age</label>
  <input type="number" placeholder='eneter a age'  onChange={(e)=>setage(e.target.value)}/>
  

<button onClick={save1} >  Save</button>


    </div>
  )
}

export default Student