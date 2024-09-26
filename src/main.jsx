import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Blogcontext from './context/Blogcontext.jsx'

createRoot(document.getElementById('root')).render(


  <StrictMode>
<Blogcontext>
  <App/>
</Blogcontext>
  </StrictMode>

)
