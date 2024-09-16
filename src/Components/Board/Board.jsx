import BoardComponent from "./boardcomponent"
import styles from './Board.module.css'
import { useState } from "react"
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

function Board() {
  const [openModal,setOpenModal] = useState(false)
  const [title,setTitle] = useState('')
  const [status,setStatus] = useState('incomplete')
  const [description,setDescription] = useState('')
  const [task, setTask] = useState(localStorage.getItem (TASK_KEY) ? JSON.parse(localStorage.getItem(TASK_KEY)) : [])
  const [boards,setBoards] = useState(localStorage.getItem(BOARD_KEY) ? JSON.parse(localStorage.getItem(BOARD_KEY)) : taskBoards)
  const [boardTitle,setBoardTitle] = useState('')
  const [boardColor,setBoardColor] = useState('')
  const [boardStatus,setBoardStatus] = useState('')
  const [openBoard,setOpenBoard] = useState('')


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
     const todoTasks = [
      ...task,
      {
        title:title,
        description:description,
        status:status,
        id:generateId()
      }

     ]
     setTask(todoTasks)
     saveToLocalStorage(TASK_KEY, todoTasks)
      setTitle('')
      setDescription('')
      setStatus('incomplete')
  }


  function updateTask(index ,uT,uD,uS) {
    const taskArray = [
      ...task,
      {
        title:uT,
        description:uD,
        status:uS
      }
    ]
    setTask(taskArray)
    
  }
  function clearBoard(status){
   const newBoardsArray =  task.filter((taskItem) => (status !== taskItem.status))
   console.log(newBoardsArray)
   setTask(newBoardsArray)
   saveToLocalStorage(TASK_KEY,newBoardsArray)

  }

  function deleteBoard(index) {
    clearBoard(status)
    const boardsArray = boards.filter((item,itemIndex) => (index !== itemIndex))
    setBoards(boardsArray)
    saveToLocalStorage(BOARD_KEY,boardsArray)
  } 
  
  function addBoard() {
    setOpenBoard(true)
 
  }

  function closeBoard() {
    setOpenBoard(false)
  }

  function saveBoard() {

    const arrayBoards = [
      ...boards,
      {
        title:boardTitle,
        color:boardColor,
        status:boardStatus
      }
    ]
    setBoards(arrayBoards)
    saveToLocalStorage(BOARD_KEY,arrayBoards)
    setBoardTitle('')
    setBoardColor('')
    setBoardStatus('')
    closeBoard()
  }

  function deletingTask(id) {
    const newTasksArray = task.filter((item) => {
     return  item.id !== id
    })
    setTask(newTasksArray)
    saveToLocalStorage(TASK_KEY,newTasksArray)
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
        {boards.map((board,index) =>(
          <BoardComponent 
          key ={index} 
          title={board.title} 
          color={board.color}  
          status={board.status} 
          value={board.value} 
          items={task.filter((item) =>(item.status === board.status))}
          updateTask={(index ,uT,uD,uS) => updateTask(index ,uT,uD,uS)}
          clearBoard={() => clearBoard(board.status)}
          deleteBoard={() => deleteBoard(index)}
          deletingTask={(id) => deletingTask(id)}
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
                  boards.map((board,index) =>(<option value={board.status} key={index}> 
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