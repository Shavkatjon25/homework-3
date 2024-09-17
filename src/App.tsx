import React, { useEffect, useState } from 'react'

function App():JSX.Element {
  const [title, setTitle]=useState('');
  const [todo, setTodo] =useState(['Hello']);

function Add(){
  if (title=='') {
    return;
  }

  setTodo([...todo, title])

  localStorage.setItem('td', JSON.stringify([...todo, title]));
  setTitle('');
}

useEffect(()=>{
  if (localStorage.getItem('td')) {
      setTodo(JSON.parse(localStorage.getItem('td')!))
  }
}, [])
  

  return (
    <div className='w-[100vw] h-[100vh] bg-slate-800 flex justify-center items-center'>

      <div className='w-[500px] bg-slate-600 items-center flex flex-col rounded-md py-5 gap-5'>
        <h2 className='text-white text-[32px] font-bold'>Todo List</h2>
        <div>
          <input type="text" className='w-[250px] px-2 py-1 rounded-md ' value={title} onChange={(e)=>setTitle(e.target.value)} />
          <button className='bg-blue-700 ml-5 py-1 px-5 text-white rounded-md'  onClick={Add}>Add</button>
        </div>
        <ul className='w-full px-5'>
          {
            todo.map(a=><li className='w-full rounded-md bg-slate-100 my-1 px-1'>{a}</li>)
          }
        </ul>
      </div>
      
    </div>
  )
}

export default App
