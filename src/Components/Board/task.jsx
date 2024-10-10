import Modal from '../modal/modalComponent'
import styles from './Board.module.css'
import {useState, useContext } from 'react'
import { StateContext } from '../../layOut/stateProvider'



/* eslint-disable react/prop-types */
function TaskComponent({ id,status,title,description,boardsArray,taskColor = 'black'}) {
    const [openTask,setOpenTask] = useState(false)
    const [updatedTitle,setUpdatedTitle] = useState(title)
    const [updatedDescription,setUpdatedDescription] = useState(description)
    const [updatedStatus,setUpdatedStatus] = useState(status)
    const { dispatch} = useContext(StateContext)


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
      dispatch(
        {
          type:'updated_task',
          title:updatedTitle,
          description:updatedDescription,
          status:updatedStatus,
          id:id
        }
      )
      setOpenTask(false)
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
    <>
        <div className={styles.taskList} >
            <div className={styles.listColor} style={{backgroundColor:`${taskColor}`}} ></div>
            <div className={styles.todos}>
                <div>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
                <div className={styles.editContainer} >
                    <ion-icon name="pencil-outline" onClick={editingTask}></ion-icon>
                    <div className={styles.delete}>
                      <ion-icon name="trash-outline" onClick={deletingTask} ></ion-icon>
                    </div>
                </div>
            </div>
        </div>
        
        <Modal show={openTask} onClose={closeTask} status={updatedStatus} >
          <div>
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
                 {boardsArray.map((board,index) => ( 
                  <option value={board.status} key ={index}>{board.title}</option>
                ))}
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