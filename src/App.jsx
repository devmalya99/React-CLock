
import './App.css'
import { useState } from 'react'



function App() {
  const[time,setTime] = useState(new Date().toLocaleTimeString())

const getTime =()=>
{
  setTime(new Date().toLocaleTimeString())
}

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime} >Get Time</button>
    </div>
  )
}

export default App
