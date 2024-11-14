import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container bg-cyan-100 my-5 mx-auto max-w-screen-lg rounded-xl p-4">
        <div>
        <h1 className='text-xl font-bold'>Your Kaams</h1>
        </div>
      </div>
    </>
  )
}

export default App
