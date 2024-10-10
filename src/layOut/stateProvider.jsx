import { createContext, useReducer } from "react"
import { BOARD_KEY,  saveToLocalStorage, TASK_KEY, generateId } from "../utilis";


export const StateContext = createContext()

/* eslint-disable react/prop-types */
function StateProvider({children}) {

    const [state,dispatch] = useReducer(reducerFunction , {
      boards: localStorage.getItem(BOARD_KEY) ? JSON.parse(localStorage.getItem(BOARD_KEY)) : [],
      tasks:localStorage.getItem (TASK_KEY) ? JSON.parse(localStorage.getItem(TASK_KEY)) : []
    })

    return (
      <div>
        <StateContext.Provider value = {{state,dispatch}}>
          {children}
        </StateContext.Provider>                                             
      </div>
    )
}

export default StateProvider


function reducerFunction(state,action) {
    switch(action.type) {
      case 'added_task': {
        const todoTasks = [
          ...state.tasks,
          {
            title:action.title,
            description:action.description,
            status:action.status,
            id:action.id
          }                     
        ]
       saveToLocalStorage(TASK_KEY, todoTasks)
        return {
          ...state,
          tasks: todoTasks
        }
      }
  
      case 'added_board': {
        const arrayBoards = [
          ...state.boards,
          {
            title:action.title,
            color:action.color,
            status:action.status,
            id:generateId()
          }
        ]
        saveToLocalStorage(BOARD_KEY,arrayBoards)
        return {
          ...state,
          boards: arrayBoards
        }
      }
  
      case 'clear_board': {
        const newTasksArray =  state.tasks.filter((taskItem) => (action.status !== taskItem.status))
        saveToLocalStorage(TASK_KEY,newTasksArray)
        return {
          ...state,
          tasks: newTasksArray
        }
      }
  
      case 'delete_board': {
        const boardsArray = state.boards.filter((item) => (action.id !== item.id) )
        
        saveToLocalStorage(BOARD_KEY,boardsArray)
        return {
          ...state,
          boards: boardsArray
        }
      }
  
      case 'updated_task': {
        const taskArray = state.tasks.map((item) => {
          if(item.id === action.id) {
            return {
              title:action.title,
              description:action.description,
              status:action.status,
              id:action.id
            }
          }else {
            return  item
          }
        })
        saveToLocalStorage(TASK_KEY,taskArray)
        return {
          ...state,
          tasks:taskArray
        }
      }
  
      case 'deleting_task': {
        const newTasksArray = state.tasks.filter((item) => {
       return  item.id !== action.id
      })
      saveToLocalStorage(TASK_KEY,newTasksArray)
        return {
          ...state,
          tasks:newTasksArray
        }
      }
    }
  }