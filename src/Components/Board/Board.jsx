import BoardComponent from "./boardcomponent"
import styles from './Board.module.css'
import { useState ,useContext} from "react"
import Modal from "../modal/modalComponent"
import { FaRegCircle } from "react-icons/fa";
import { generateId} from "../../utilis";
import { StateContext } from "../../layOut/stateProvider";
import { boardColors } from "../../utilis";

function Board() {
  const [openModal,setOpenModal] = useState(false)
  const [title,setTitle] = useState('')
  const [status,setStatus] = useState('')
  const [description,setDescription] = useState('')
  const [boardTitle,setBoardTitle] = useState('')
  const [boardColor,setBoardColor] = useState('black')
  const [boardStatus,setBoardStatus] = useState('')
  const [openBoard,setOpenBoard] = useState('')
  const {state,dispatch} = useContext(StateContext)

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
      status:status ? status : state.boards[0].status,
      id:generateId()
    })
    setTitle('')
    setDescription('')
    setStatus('')
    closeModal()
  }
  
  function addBoard() {
    setOpenBoard(true)
  }

  function closeBoard() {
    setOpenBoard(false)
  }

  function saveBoard() {
    console.log('save')
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

  return (
    <div>
      <div className={styles.features}>
        <div className={styles.mainiconContainer}>
          <div className={styles.iconContainer}>
              <div className={styles.circleIcon}>
                <FaRegCircle  style={{color:'red'}}/>
              </div>
          </div>
          <div className={styles.iconContainer}>
              <div className={styles.circleIcon}>
                <FaRegCircle  style={{color:'orange', fontSize:'18px'}}/>
              </div>
          </div>
          <div className={styles.iconContainer}>
              <div className={styles.circleIcon}>
                <FaRegCircle  style={{color:'green'}}/>
              </div>
          </div>
        </div>
        <div className={styles.taskContainer}>
          <div className={styles.btnContainer}>
            <button className={styles.button} onClick={addBoard}>Add a Board</button>
          </div>
          {
            state.boards.length >= 1 &&
            <div>
              <button onClick={isModalOpen}>Add a Task</button>
            </div>
          }

        </div>
      </div>
     {state.boards.length === 0 &&
      <p style={{fontSize:'20px'}}>Add a board to keep track of your tasks </p>
     }
      <div className={styles.mainBoardContainer}>
        {state.boards.map((board) =>(
          <BoardComponent 
            key ={board.id} 
            title={board.title} 
            color={board.color}  
            status={board.status} 
            value={board.value} 
            id={board.id}
            items={state.tasks.filter((item) =>(item.status === board.status))}
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
              <select className={styles.selectarea}  value={status} onChange={changeStatus} defaultValue='hoo'>
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
             
              <select className={styles.selectColor}  value={boardColor} onChange={(e) => setBoardColor(e.target.value)}>
                {
                  boardColors.map((boardColor,index) => (<option value={boardColor.color} key={index} 
                  
                  >{boardColor.color}</option>))
                }
              </select>
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