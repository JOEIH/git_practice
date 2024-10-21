import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button style={{backgroundColor: 'green'}} onClick={() => setCount((prev) => prev + 1)}>+1</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
        <h2>{count}</h2>
      </div>
    </>
  )
}

export default App
