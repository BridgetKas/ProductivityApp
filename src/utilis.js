export function generateId() {
    return Date.now() + Math.random().toString(36).slice(2, 9);
  }

export const TASK_KEY = 'todoTasks'

export const BOARD_KEY = 'todoBoards'


export function saveToLocalStorage(key,value){
    return localStorage.setItem(key, JSON.stringify(value))
}




