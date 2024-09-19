import  { useEffect, useState } from 'react'

function App():JSX.Element {

  interface User{
    title:string,
    age:number | string,
    index:number | undefined
  }


  const [title, setTitle]=useState<string>('');
  const [age, setAge]=useState<number | string>('');
  const [todo, setTodo] =useState<User[]>([{title:'Hello', age:7, index:0}]);

function Add(){
  if (title=='' || age==0) {
    return;
  }

  let a:User={ title, age, index:todo?.length}
  
  setTodo([...todo, a])

  localStorage.setItem('td', JSON.stringify([...todo, a]));
  setTitle('');
  setAge('')
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
          <input type="text" placeholder='Title' className='w-[180px] px-2 py-1 rounded-md ' value={title} onChange={(e)=>setTitle(e.target.value)} />
          <input type="number" placeholder='Age' className='w-[180px] ml-2 px-2 py-1 rounded-md ' value={age} onChange={(e)=>setAge((e.target.value))} />
          <button className='bg-blue-700 ml-5 py-1 px-5 text-white rounded-md'  onClick={Add}>Add</button>
        </div>
        <ul className='w-full px-5'>
          {
            todo.map(a=><li className='w-full rounded-md bg-slate-100 my-1 px-2'><h2 className='font-bold text-[18px]'>Title: {a.title}</h2><p className='text-[12px]'>Age: {a.age}  Index: {(a.index as number)+1}</p></li>)
          }
        </ul>
      </div>
      
    </div>
  )
}

export default App
