export function generateId() {
    return Date.now() + Math.random().toString(36).slice(2, 9);
  }

export const TASK_KEY = 'todoTasks'

export const BOARD_KEY = 'todoBoards'


export function saveToLocalStorage(key,value){
    return localStorage.setItem(key, JSON.stringify(value))
}


export const taskBoards = [
  {
    title:'Backlog',
    color:'red',
    status:'incomplete',
    value:'incomplete'
  },
  {
    title:'In progress',
    color:'orange',
    status:'inprogress',
    value:'inprogress'
  },
  {
    title:'Review',
    color:'blue',
    status:'reviewing',
    value:'reviewing'
  },
  {
    title:'Done',
    color:'green',
    status:'complete',
    value:'complete'
  }
]

