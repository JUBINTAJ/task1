import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Details from './Details'

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>

<Route path="/" element={<Home />} />
<Route path="/Student" element={<Student />} />
<Route  path="/Details" element={<Details/>}/>
       
      </Routes>
      
      
      </BrowserRouter>


    </div>
  )
}

export default App