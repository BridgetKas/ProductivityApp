import Modal from '../modal/modalComponent'
// import styles from './Board.module.css'
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
        <div className="p-2.5 rounded-[5px] text-black flex items-center gap-[9px] text-[15px] bg-white mb-2.5 w-[95%] relative" >
          <div className="w-[5px] h-[100px] bg-black" style={{backgroundColor:`${taskColor}`}} ></div>
          <div className="flex flex-row items-center">
            <div>
              <div className="flex items-center gap-2.5">
                <p className="text-left text-[14px] my-2 mx-0">{title}</p>
              </div>
              <p className="text-left text-[14px] my-2 mx-0">{description}</p>
            </div>
            <div className="absolute top-[5px] right-[5px]" >
              <ion-icon name="ellipsis-horizontal-outline" onClick={openingSideMenu}></ion-icon>
            </div>
          </div>
          </div>
      
        
        <Modal show={openTask} onClose={closeTask} status={updatedStatus} >
          <div>
            <div className="flex flex-col items-center gap-2.5">
              <input 
                type='text'
                value={updatedTitle} 
                className="w-full p-2.5 border border-black text-black" 
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea 
                id="story" 
                rows="5"
                cols="33" 
                className="p-2.5 mb-2.5 border border-black  text-black "
                value={updatedDescription} 
                onChange={(e) => setUpdatedDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <select className="p-2.5 mb-2.5 border border-black  text-black bg-transparent" value={updatedStatus} onChange={changeStatus}>
                 {boardsArray.map((board,index) => ( 
                  <option value={board.status} key ={index}>{board.title}</option>
                ))}
              </select>
            </div>
            <div className='modalContainer'>
                <button className="text-black border border-black p-2.5"
                  onClick={_updateTask}  
                  disabled={!title || !description}
                >
                  Update 
                </button>
            </div>
          </div>
        </Modal>
        <Modal show={openSideMenu} onClose={closeSideMenu}>
          <div className="flex items-center gap-2.5">
            <input type='checkbox' value={completedTask} onChange={() => setCompletedTask(!completedTask)}/>
            <p className="text-black">Mark as completed</p>
          </div>
          <div className="text-[25px] cursor-pointer flex items-center justify-center gap-2.5">
            <div className="text-black">
              <ion-icon name="pencil-outline" onClick={editingTask}></ion-icon>
            </div>
            <div className="text-red-700">
              <ion-icon name="trash-outline" onClick={deletingTask} ></ion-icon>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default TaskComponent