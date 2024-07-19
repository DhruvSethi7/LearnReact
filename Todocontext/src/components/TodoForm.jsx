import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [text, settext] = useState('')
    const {addTodo}=useTodo()
    function handleClick(e) {
        e.preventDefault()
        if(text=='')return
        addTodo(text)
        settext('')
    }
    return (
        <form  className="flex">
            <input
                type="text"
                value={text}
                onChange={(e)=>settext(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={(e)=>handleClick(e)}  className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


