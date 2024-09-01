import Modal from '../modal/modalComponent'
import styles from './Board.module.css'
import {useState} from 'react'

const colorBar = {
    inComplete:'red',
    complete:'green',
    inprogress:'orange',
    reviewing:'blue'
}

/* eslint-disable react/prop-types */
function TaskComponent({status,title,description,updateTask}) {
    const [openTask,setOpenTask] = useState(false)
    const [titleTask,setTitleTask] = useState(title)
    const [descriptionTask,setDescriptionTask] = useState(description)
    const [taskstatus,setTaskStatus] = useState(status)
    // const [index,setIndex] = useState(0)

    function editingTask() {
        setOpenTask(true)
    }

    function closeTask() {
        setOpenTask(false)
    }

    function changeStatus(e) {
        setTaskStatus(e.target.value)
    }
    
  return (
    <>
        <div className={styles.taskList}>
            <div className={styles.listColor} style={{backgroundColor:colorBar[taskstatus] }} ></div>
            <div className={styles.todos}>
                <div>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
                <div className={styles.editContainer} >
                    <ion-icon name="ellipsis-vertical-outline" onClick={editingTask}></ion-icon>
                </div>
            </div>
        </div>
        
        <Modal show={openTask} onClose={closeTask} status={taskstatus} >
          <div  >
            <div className={styles.textareaContainer}>
              <input type='text' placeholder='Enter a title...' value={titleTask} className={styles.taskInput} onChange={(e) => setTitleTask(e.target.value)}/>
              <textarea id="story" rows="5" cols="33" placeholder='Enter a description' className={styles.textarea} value={descriptionTask} onChange={(e) => setDescriptionTask(e.target.value)}> </textarea>
            </div>
            <div>
              <select className={styles.selectarea}  value={taskstatus} onChange={changeStatus}>
                <option value="inComplete" >Incomplete</option>
                <option value="inprogress">In progress</option>
                <option value="reviewing">Reviewing</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div className='modalContainer'>
                <button className={styles.saveBtn} onClick={updateTask} disabled={!title || !description}>Save</button>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default TaskComponent