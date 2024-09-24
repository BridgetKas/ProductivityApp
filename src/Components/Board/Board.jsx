import BoardComponent from "./boardcomponent"
import styles from './Board.module.css'
import { useState ,useReducer} from "react"
import Modal from "../modal/modalComponent"
import { FaRegCircle } from "react-icons/fa";
import { BOARD_KEY, generateId, saveToLocalStorage } from "../../utilis";
import { TASK_KEY } from "../../utilis";



const taskBoards = [
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
          status:action.status
        }
      ]
      saveToLocalStorage(BOARD_KEY,arrayBoards)
      return {
        ...state,
        boards: arrayBoards
      }
    }

    case 'clear_board': {
      const newBoardsArray =  state.boards.filter((taskItem) => (action.status !== taskItem.status))
      saveToLocalStorage(TASK_KEY,newBoardsArray)
      return {
        ...state,
        boards: newBoardsArray
      }
    }

    case 'delete_board': {
      const boardsArray = state.boards.filter((item,itemIndex) => (action.index !== itemIndex))
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

function Board() {
  const [openModal,setOpenModal] = useState(false)
  const [title,setTitle] = useState('')
  const [status,setStatus] = useState('incomplete')
  const [description,setDescription] = useState('')
  // const [task, setTask] = useState(localStorage.getItem (TASK_KEY) ? JSON.parse(localStorage.getItem(TASK_KEY)) : [])
  // const [boards,setBoards] = useState(localStorage.getItem(BOARD_KEY) ? JSON.parse(localStorage.getItem(BOARD_KEY)) : taskBoards)
  const [boardTitle,setBoardTitle] = useState('')
  const [boardColor,setBoardColor] = useState('')
  const [boardStatus,setBoardStatus] = useState('')
  const [openBoard,setOpenBoard] = useState('')

  const [state,dispatch] = useReducer(reducerFunction , {
    boards: localStorage.getItem(BOARD_KEY) ? JSON.parse(localStorage.getItem(BOARD_KEY)) : taskBoards,
    tasks:localStorage.getItem (TASK_KEY) ? JSON.parse(localStorage.getItem(TASK_KEY)) : []
  })


  function isModalOpen() {
    setOpenModal(true)
  }

  function closeModal(){
      setOpenModal(false)
  }

  function changeStatus(e) {
      setStatus(e.target.value)
  }

  function saveTask() {
    dispatch ({
      type:'added_task',
      title:title,
      description:description,
      status:status,
      id:generateId()
    })
    setTitle('')
    setDescription('')
    setStatus('incomplete')
    closeModal()
  }


  function updateTask(uT,uD,uS,id) {
    dispatch(
      {
        type:'updated_task',
        title:uT,
        description:uD,
        status:uS,
        id:id
      }
    )
  }

  function clearBoard( status){
    dispatch({
      type:'clear_board',
      status:status
    })
  }

  function deleteBoard(index) {
    clearBoard(status)
    dispatch({
      type:'delete_board',
      index:index
    })
  } 
  
  function addBoard() {
    setOpenBoard(true)
 
  }

  function closeBoard() {
    setOpenBoard(false)
  }

  function saveBoard() {
    dispatch (
      {
        type:'added_board',
        title:boardTitle,
        color:boardColor,
        status:boardStatus
      }
    )
    setBoardTitle('')
    setBoardColor('')
    setBoardStatus('')
    closeBoard()
  }

  function deletingTask(id) {
    dispatch (
      {
        type:'deleting_task',
        id:id
      }
    )

  }


  return (
    <div>
      <div className={styles.features}>
        <div className={styles.mainiconContainer}>
          <div className={styles.iconContainer}>
              <div className={styles.circleIcon}>
                  <FaRegCircle  style={{color:'red'}}/>
              </div>
              <p>Task</p>
          </div>
          <div className={styles.iconContainer}>
              <div className={styles.circleIcon}>
                  <FaRegCircle  style={{color:'orange', fontSize:'18px'}}/>
              </div>
              <p>Story</p>
          </div>
          <div className={styles.iconContainer}>
              <div className={styles.circleIcon}>
                  <FaRegCircle  style={{color:'green'}}/>
              </div>
              <p>Bug</p>
          </div>
        </div>
        <div className={styles.taskContainer}>
          <div>
              <button onClick={isModalOpen}>Add a Task</button>
          </div>
          <div className={styles.btnContainer}>
              <button className={styles.button} onClick={addBoard}>Add a Board</button>
          </div>
        </div>
      </div>
      <div className={styles.mainBoardContainer}>
        {state.boards.map((board,index) =>(
          <BoardComponent 
          key ={index} 
          title={board.title} 
          color={board.color}  
          status={board.status} 
          value={board.value} 
          items={state.tasks.filter((item) =>(item.status === board.status))}
          updateTask={(uT,uD,uS,id) => updateTask(uT,uD,uS,id)}
          clearBoard={() => clearBoard(board.status)}
          deleteBoard={() => deleteBoard(index)}
          deletingTask={(id) => deletingTask(id)}
          boardsArray={state.boards}
          taskColor={board.color}
          /> 
        ))}
      
        <Modal show={openModal} onClose={closeModal} status={status} >
          <div  >
            <div className={styles.textareaContainer}>
              <input type='text' placeholder='Enter a title...' value={title} 
                className={styles.taskInput} onChange={(e) => setTitle(e.target.value)}
              />
              <textarea id="story" rows="5" cols="33" placeholder='Enter a description' 
                className={styles.textarea} value={description}
                onChange={(e) => setDescription(e.target.value)}
              > 
              </textarea>
            </div>
            <div>
              <select className={styles.selectarea}  value={status} onChange={changeStatus}>
                {
                  state.boards.map((board,index) =>(<option value={board.status} key={index}> 
                  {board.status}</option>))
                }
              
              </select>
            </div>
            <div className='modalContainer'>
                <button className={styles.saveBtn} onClick={saveTask} 
                disabled={!title || !description}
                >
                  Save
                </button>
            </div>
          </div>
        </Modal>
        <Modal show={openBoard} onClose={closeBoard} >
          <div>
            <div className={styles.boardContainer}>
              <input type='text' placeholder='Enter a Board title...' value={boardTitle} 
                className={styles.taskInput} onChange={(e) => setBoardTitle(e.target.value)}
              />
              <input type='text' placeholder='Enter  Board color...' value={boardColor} 
                className={styles.taskInput} onChange={(e) => setBoardColor(e.target.value)}
              />
              <input type='text' placeholder='Enter  Board status...' value={boardStatus} 
                className={styles.taskInput} onChange={(e) => setBoardStatus(e.target.value)}
              />
            </div>
            <div className='modalContainer'>
                <button className={styles.saveBtn} onClick={saveBoard} 
                disabled={!boardTitle || !boardColor || !boardStatus}
                >
                  Save
                </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Board