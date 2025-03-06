import BoardComponent from "./boardcomponent"
// import styles from './Board.module.css'
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
      <div className="flex items-center justify-between p-2.5 min-[992px]:p-0">

        <div className="flex items-center gap-[15px] pt-[15px] min-[992px]:py-5 min-[992px]:px-15">
          <div className="flex items-center gap-2">
            <div >
              <FaRegCircle className="text-red-700 text-[18px]"/>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div >
              <FaRegCircle  className="text-orange-600 text-[18px]"/>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <FaRegCircle className="text-green-600 text-[18px]"/>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 pr-[15px]">
          <div >
            <button className="text-white  p-2.5 outline-none focus:border focus:outline-none focus:border-white" onClick={addBoard}>Add a Board</button>
          </div>
          {
            state.boards.length >= 1 &&
            <div>
              <button  className="p-2.5 text-white outline-none focus:border focus:outline-none focus:border-white"onClick={isModalOpen}>Add a Task</button>
            </div>
          }

        </div>
      </div>
     {state.boards.length === 0 &&
      <p  className="text-[20px]">Add a board to keep track of your tasks </p>
     }
      <div className="flex items-start flex-wrap gap-2.5">
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
            <div className="flex flex-col items-center gap-2.5">
              <input type='text' placeholder='Enter a title...' value={title} 
                className="w-full p-2.5 border border-black placeholder-gray-500 text-black" onChange={(e) => setTitle(e.target.value)}
              />
              <textarea id="story" rows="5" cols="33" placeholder='Enter a description' 
                className="p-2.5 mb-2.5 border border-black placeholder-gray-500  text-black" value={description}
                onChange={(e) => setDescription(e.target.value)}
              > 
              </textarea>
            </div> 
            <div>
              <select className="p-2.5 mb-2.5 border border-black text-gray-500 bg-transparent" value={status} onChange={changeStatus} defaultValue='hoo'>
                {
                  state.boards.map((board,index) =>(<option value={board.status} key={index} > 
                  {board.status}</option>))
                }
              </select>
            </div>
            <div>
                <button className="text-black p-2.5 border border-black rounded-none" onClick={saveTask} 
                  disabled={!title || !description}
                >
                  Save
                </button>
            </div>
          </div>
        </Modal>
        <Modal show={openBoard} onClose={closeBoard} >
          <div>
            <div className="flex flex-col items-center gap-2.5 mb-2.5">
              <input type='text' placeholder='Enter a Board title...' value={boardTitle} 
                className="w-[274px] p-2.5 text-black border border-black placeholder-gray-500" onChange={(e) => setBoardTitle(e.target.value)}
              />
             
              <select className="w-[274px] p-2.5 text-black border border-black bg-transparent"  value={boardColor} onChange={(e) => setBoardColor(e.target.value)}>
                {
                  boardColors.map((boardColor,index) => (<option value={boardColor.color} key={index} 
                  
                  >{boardColor.color}</option>))
                }
              </select>
              <input type='text' placeholder='Enter  Board status...' value={boardStatus} 
                className="w-[274px] p-2.5 text-black border border-black  placeholder-gray-500" onChange={(e) => setBoardStatus(e.target.value)}
              />
            </div>
            <div className='modalContainer'>
                <button className="text-black" onClick={saveBoard} 
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