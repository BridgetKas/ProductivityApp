import Modal from '../modal/modalComponent'
import styles from './Board.module.css'
import {useState} from 'react'

const colorBar = {
    incomplete:'red',
    complete:'green',
    inprogress:'orange',
    reviewing:'blue'
}

/* eslint-disable react/prop-types */
function TaskComponent({status,title,description,updateTask}) {
    const [openTask,setOpenTask] = useState(false)
    const [updatedTitle,setUpdatedTitle] = useState(title)
    const [updatedDescription,setUpdatedDescription] = useState(description)
    const [updatedStatus,setUpdatedStatus] = useState(status)
    // const [index,setIndex] = useState(0)

    function editingTask() {
        setOpenTask(true)
    }

    function closeTask() {
        setOpenTask(false)
    }

    function changeStatus(e) {
        setUpdatedStatus(e.target.value)
    }

    function _updateTask(){
      updateTask(updatedTitle,updatedDescription,updatedStatus)
      setUpdatedTitle('')
      setUpdatedDescription('')
      setOpenTask(false)
      
    }
    
  return (
    <>
        <div className={styles.taskList}>
            <div className={styles.listColor} style={{backgroundColor:colorBar[status] }} ></div>
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
        
        <Modal show={openTask} onClose={closeTask} status={updatedStatus} >
          <div  >
            <div className={styles.textareaContainer}>
              <input 
                type='text' 
                placeholder='Enter a title...'
                value={updatedTitle} 
                className={styles.taskInput} 
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea 
                id="story" 
                rows="5"
                cols="33" 
                placeholder='Enter a description' 
                className={styles.textarea}
                value={updatedDescription} 
                onChange={(e) => setUpdatedDescription(e.target.value)}
              > 
              </textarea>
            </div>
            <div>
              <select className={styles.selectarea}  value={updatedStatus} onChange={changeStatus}>
                <option value="incomplete" >Incomplete</option>
                <option value="inprogress">In progress</option>
                <option value="reviewing">Reviewing</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div className='modalContainer'>
                <button className={styles.saveBtn}
                  onClick={_updateTask}  
                  disabled={!title || !description}
                >
                  Update 
                </button>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default TaskComponent