import { useState } from 'react'
import logo from './logo.svg'
import Home from "./screens/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Home></Home>
    </div>
  )
}

export default App
