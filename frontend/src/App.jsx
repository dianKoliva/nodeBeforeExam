import { useState } from 'react'
import logo from './logo.svg'
import Home from "./screens/Home"
import Login from './screens/Login'
import Signup from './screens/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'   
import context from './MyContext'


function App() {
  const [count, setCount] = useState(0);
  const  [auth,setAuth]=useState(false);

  return (
    <context.Provider value={{auth,setAuth}}>
    <Router>
     
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </Router>
    </context.Provider>
  )
}

export default App
