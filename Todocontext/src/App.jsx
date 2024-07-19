import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
 const [todos, settodos] = useState([])
 const addTodo=(todoMessage)=>{
    settodos([{id:Date.now(),todo:todoMessage,isCompleted:false},...todos])
 }
 const removeTodo=(id)=>{
    settodos(todos.filter((todo)=>todo.id!==id)); 
} 
 const toggleTodo=(id)=>{
  settodos(todos.map((t)=>{
    return t.id===id?{      
      ...t,
      isCompleted:!t.isCompleted
      }:t
  }))
 }
 const updateTodo=(id,message)=>{
  settodos(todos.map((t)=>{
    return t.id===id?{      
    ...t,
    todo:message
    }:t
  }))
 } 
useEffect(()=>{
   const todos=JSON.parse(localStorage.getItem('todos'))
   if(todos && todos.length>0){
    settodos(todos)
   }
},[])

useEffect(() => {
   localStorage.setItem('todos',JSON.stringify(todos))
}, [todos])

 
  return (
    <TodoProvider value={{addTodo,removeTodo,todos,toggleTodo,updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
