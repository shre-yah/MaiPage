import {createContext,useContext} from "react"

export const ToDocontext = createContext({ 
    todos:[
        {id: 1,
        todo: "Todo message",
    completed:false,}
    ],
    addTodo: (todo) =>{},
    updateTodo: (id,todo) => {},
    deleteTodo :(id) =>{},
    togglecomplete: (id) =>{ }
})

export const useTodo =()=>{
    return useContext(ToDocontext)
}

export const Todoprovider = ToDocontext.Provider