
import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {id:1,
        todo:'hii',
        isCompleted:false
    }
    ],
    addTodo:(todo)=>{},
    removeTodo:(id)=>{},
    toggleTodo:(id)=>{},
    updateTodo:(id,todo)=>{}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider

export default TodoProvider