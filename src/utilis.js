export function generateId() {
    return Date.now() + Math.random().toString(36).slice(2, 9);
  }

export const TASK_KEY = 'todoTasks'

export const BOARD_KEY = 'todoBoards'

export const EVENTS_KEY = 'events'


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

export function getYearMonthDate(date){
  return (`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}


export function getDay(date) {
  let day = new Date(date).getDay() + 1
  
  switch(day) {
    case 1:{
      return 'Sunday'
    }
    case 2:{
      return 'Monday'
    }
    case 3:{
     return 'Tuesday' 
    }
    case 4:{
      return 'Wednesday'
    }
    case 5:{
      return 'Thursday'
    }
    case 6:{
      return 'Friday'
    }
    case 7:{
      return 'Saturday'
    }
    default:
      throw new Error('This is an invalid day')
  }
  //[replace the switch with an array]
}

