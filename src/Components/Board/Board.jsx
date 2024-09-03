import BoardComponent from "./boardcomponent"
import styles from './Board.module.css'
import { useState } from "react"
import Modal from "../modal/modalComponent"
import { FaRegCircle } from "react-icons/fa";



const taskBoards = [
  {
    title:'Backlog',
    color:'red',
    status:'incomplete'
  },
  {
    title:'In progress',
    color:'orange',
    status:'inprogress'
  },
  {
    title:'Review',
    color:'blue',
    status:'reviewing'
  },
  {
    title:'Done',
    color:'green',
    status:'complete'
  }
]

function Board() {
  const [openModal,setOpenModal] = useState(false)
  const [title,setTitle] = useState('')
  const [status,setStatus] = useState('incomplete')
  const [description,setDescription] = useState('')
  const [task, setTask] = useState([])
  const [boards,setBoards] = useState(taskBoards)

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
     setTask([
      ...task,
      {
        title:title,
        description:description,
        status:status
      }
     ])
     
      setTitle('')
      setDescription('')
      setStatus('incomplete')
  }


  function updateTask(index ,uT,uD,uS) {
    setTask([
      ...task,
      {
        title:uT,
        description:uD,
        status:uS
      }
     ])
    
  }

  function clearBoard(status){
   const newBoardsArray =  task.filter((taskItem) => (status !== taskItem.status))
   setTask(newBoardsArray)
  }

  function deleteBoard(index) {
    clearBoard(status)
    const boardsArray = boards.filter((item,itemIndex) => (index !== itemIndex))
    setBoards(boardsArray)
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
              <button className={styles.button}>Add a Board</button>
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
          items={task.filter((item) =>(item.status === board.status))}
          updateTask={(index ,uT,uD,uS) => updateTask(index ,uT,uD,uS)}
          clearBoard={() => clearBoard(board.status)}
          deleteBoard={() => deleteBoard(index)}
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
                <option value="incomplete" >Incomplete</option>
                <option value="inprogress">In progress</option>
                <option value="reviewing">Reviewing</option>
                <option value="complete">Complete</option>
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
      </div>
    </div>
  )
}

export default Board