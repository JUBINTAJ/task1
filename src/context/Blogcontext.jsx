import React, { children, createContext, useState } from 'react'
export const Studentcontext=createContext()



function Blogcontext({children}) {

    const[name,setname]=useState([])
    const[batch,setbatch]=useState([])
    const[age ,setage]=useState([])
    const[getname , setgetname]=useState([])
    const[getbatch , setgetbatch]=useState([])
    const[getage , setgetage]=useState([])

    const save = (name, batch,age) => {
        setname(prev => [...prev, name])
        setbatch(prev => [...prev, batch])
        setage(prev=>[...prev,age])
    }

  const blog1=(b)=>{
    setgetname(name[b])
    setgetbatch(batch[b])
    setgetage(age[b])
  }
  const deletetask=(index)=>{
    const   updatetask=name.filter((_,i)=>i!==index)
       setname(updatetask)
    }

 const  value={
    name,
    save,
    blog1,
    getage,
    getbatch,
    getname,
    deletetask

}

  return (

    <div>
<Studentcontext.Provider value={value}>

    {children}
</Studentcontext.Provider>

    </div>
  )
}

export default Blogcontext;


