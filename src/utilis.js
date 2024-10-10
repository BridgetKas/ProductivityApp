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
    value:'incomplete',
    id:generateId()
  },
  {
    title:'In progress',
    color:'orange',
    status:'inprogress',
    value:'inprogress',
    id:generateId()

  },
  {
    title:'Review',
    color:'blue',
    status:'reviewing',
    value:'reviewing',
    id:generateId()

  },
  {
    title:'Done',
    color:'green',
    status:'complete',
    value:'complete',
    id:generateId()

  }
]


export const boardColors = [
  {
    color: "Black"
  },
  {
    color : "White"
  },
  {
    color: "Red"
  },
  {
    color: "Blue"
  },
  {
    color: "Green"
  },
  {
    color: "Yellow"
  },
  {
    color: "Orange"
  },
  {
    color: "Purple"
  },
  {
    color: "Pink"
  },
  {
    color:"Gray"
  },
  {
    color: "Cyan"
  },
  {
    color:"Magenta"
  },
  {
    color:"Lime"
  },
  {
    color:"Teal"
  },
  {
    color:"Navy"
  },
  {
    color:"Olive"
  },
  {
    color:"Gold"
  },
  {
    color:"Silver"
  },
  {
    color:"Maroon"
  }
]



