import React, { createContext, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Studentcontext } from './context/Blogcontext'

function Home() {
    const {name ,blog1,deletetask}=useContext(Studentcontext)
    const nav=useNavigate()

    const click=(b)=>{
        blog1(b)
        nav('/Details')

    }
    


  return (
    <div>


        <button><Link to={'/Student'}>+ button</Link></button>

         <ul>
            {name.map((a,b)=>  <li  key={b} onClick={()=>click(b)}>{a}

                <button onClick={()=>deletetask(b)}>delete</button>
            </li>
            )}
          
           </ul> 
    </div>
  )
}

export default Home