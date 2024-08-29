import BoardComponent from "./boardContainer"
import styles from './Board.module.css'
import { useState } from "react"
import Modal from "../modal/modalComponent"
import { FaRegCircle } from "react-icons/fa";



const boards = [
  {
    title:'Backlog',
    color:'red'
  },
  {
    title:'In progress',
    color:'orange'
  },
  {
    title:'Review',
    color:'blue'
  },
  {
    title:'Done',
    color:'green'
  }
]

function Board() {
  const [board,setBoard] = useState(boards)
  const [openModal,setOpenModal] = useState(false)
  const [title,setTitle] = useState('')
  const [status,setStatus] = useState('inComplete')
  const [description,setDescription] = useState('')

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
    console.log('toffayo')
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
        {
          board.map((item,index) =>(
            <BoardComponent color={item.color} title={item.title} key={index}/>
          ))
        }
      <Modal show={openModal} onClose={closeModal} status={status}>
        <div >
          <div className={styles.textareaContainer}>
              <input type='text' placeholder='Enter a title...' value={title} className={styles.taskInput} onChange={(e) => setTitle(e.target.value)}/>
              <textarea id="story" rows="5" cols="33" placeholder='Enter a description' className={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)}> </textarea>
          </div>
          <div>
            <select className={styles.selectarea}  value={status} onChange={changeStatus}>
              <option value="inComplete" >Incomplete</option>
              <option value="inprogress">In progress</option>
              <option value="reviewing">Reviewing</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div className='modalContainer'>
              <button className={styles.saveBtn} onClick={saveTask} disabled={!title || !description}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
    </div>
  )
}

export default Board