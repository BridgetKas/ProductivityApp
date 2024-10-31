import Modal from '../modal/modalComponent'
import styles from './Board.module.css'
import {useState, useContext } from 'react'
import { StateContext } from '../../layOut/stateProvider'



/* eslint-disable react/prop-types */
function TaskComponent({ id,status,title,description,boardsArray,taskColor = 'black'}) {
    const [openTask,setOpenTask] = useState(false)
    const [openSideMenu,setOpenSideMenu] = useState(false)
    const [completedTask, setCompletedTask] = useState(false)
    const [updatedTitle,setUpdatedTitle] = useState(title)
    const [updatedDescription,setUpdatedDescription] = useState(description)
    const [updatedStatus,setUpdatedStatus] = useState(status)
    const { dispatch} = useContext(StateContext)


    function openingSideMenu() {
      setOpenSideMenu(true)
    }

    function closeSideMenu() {
      setOpenSideMenu(false)
    }

    function editingTask() {
      setOpenTask(true)
      setOpenSideMenu(false)

      // setOpenTask(false)
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
          completed:completedTask,
          status:updatedStatus,
          id:id,
          color:taskColor
        }
      )
      setOpenTask(false)
    }
    
    function deletingTask() {
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
              <div className={styles.checkboxContainer}>
                <p>{title}</p>
              </div>
              <p>{description}</p>
            </div>
            <div className={styles.sideMenuContainer} >
              <ion-icon name="ellipsis-horizontal-outline" onClick={openingSideMenu}></ion-icon>
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
        <Modal show={openSideMenu} onClose={closeSideMenu}>
          <div className={styles.inputContainer}>
            <input type='checkbox' value={completedTask} onChange={() => setCompletedTask(!completedTask)}/>
            <p>Mark as completed</p>
          </div>
          <div className={styles.editContainer} >
            <div className={styles.edit}>
              <ion-icon name="pencil-outline" onClick={editingTask}></ion-icon>
            </div>
            <div className={styles.delete}>
              <ion-icon name="trash-outline" onClick={deletingTask} ></ion-icon>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default TaskComponent