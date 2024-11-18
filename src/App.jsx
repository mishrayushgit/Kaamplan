import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [kaam, setKaam] = useState("")
  const [kaams, setKaams] = useState([])
  const [showFinished, SetshowFinished] = useState(false)
  useEffect(() => {
    let kaamstring = localStorage.getItem("kaams")
    if (kaamstring){
      let kaams = JSON.parse(localStorage.getItem("kaams"))
      setKaams(kaams)
    }
  }, [])
  
  const SaveToLS = (e) => {
    localStorage.setItem("kaams", JSON.stringify(kaams)) 
  }
  
  const handleEdit = (e,id) =>  { 
    let k = kaams.filter(item=>{
      return item.id === id
  })
  setKaam(k[0].kaam)
  let newKaams = kaams.filter(item=>{
    return item.id !== id
  })
  setKaams(newKaams)
  SaveToLS()
}
  const handleDelete = (e,id) => {
    let index = kaams.findIndex(item =>{
      return item.id === id
    })
    let newKaams = kaams.filter(item=>{
      return item.id !== id
    })
    setKaams(newKaams)
    SaveToLS()
  }
  const handleAdd = () => {
    setKaams([...kaams,{id: uuidv4() ,kaam, isCompleted: false}])
    setKaam("")
    SaveToLS()
  }
  const handleChange = (e) => {
    setKaam(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    console.log(id)
    let index = kaams.findIndex(item =>{
      return item.id === id
    })
    let newKaams = [...kaams]
    newKaams[index].isCompleted = !(newKaams[index].isCompleted)
    setKaams(newKaams)
    SaveToLS()
  }
  const toggleFinished = (e) => {
    SetshowFinished(!showFinished)
  }
  
  

  return (
    <>
    <Navbar/>
      <div className="container bg-cyan-100 my-5 mx-auto max-w-screen-lg rounded-xl p-4 min-h-[80vh]">
        <h1 className='font-bold text-3xl text-cyan-900 text-center'>Kaamplan - Plan your kaam</h1>
          <div className="addKaam my-4 flex gap-5 justify-center">
            <h2 className='text-lg font-medium text-cyan-900' >Add Kaam</h2>
          <input onChange= {handleChange} value={kaam} className='w-1/2 flex rounded-xl px-3' type="text" />
          <button onClick={handleAdd} disabled={kaam.length<3} className='bg-cyan-500 hover:bg-cyan-800 text-white p-2 py-1 text-sm rounded-xl font-bold'>Save</button>
          </div>
        
        <input type="checkbox" onChange={toggleFinished} checked={showFinished} className=''/> show finished
        <h2 className='text-lg font-bold text-cyan-900'>Your Kaams</h2> 
        <div className="kaams">
        {kaams.length === 0 && <div className='text-cyan-900'>No kaam to do</div>}
        {kaams.map(item =>{ 

          return (showFinished || !item.isCompleted ) && <div key={item.id} className="kaam flex justify-between my-3 max-w-md">
            <div className='flex gap-5'>
            <input type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} name={item.id} id="" />
            <div className={`${item.isCompleted ? "line-through" : ""} max-w-md break-words`}>{item.kaam}</div>
            </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>handleEdit(e,item.id)} className='mx-1 bg-cyan-500 hover:bg-cyan-800 text-white p-2 py-1 text-sm rounded-md font-bold'>Edit</button>
              <button onClick={(e) => {handleDelete(e,item.id)}} className='mx-1 bg-cyan-500 hover:bg-cyan-800 text-white p-2 py-1 text-sm rounded-md font-bold'>Delete</button>
            </div>
          </div>

            })}
        </div>
        </div>

    </>
  )
}

export default App
