import Modal from '../modal/modalComponent'
// import styles from './Board.module.css'
import TaskComponent from './task'
import {useState , useContext} from 'react'
import { StateContext } from '../../layOut/stateProvider'

/* eslint-disable react/prop-types */
function BoardComponent({id,title,color,items,boardsArray,taskColor,status}) {
    const [openTabMenu,setOpenTabMenu] = useState(false)
    const length = items.length
    const {dispatch} = useContext(StateContext)


    function isTabMenuOpen(){
      setOpenTabMenu(true)
    }
  
    function closeTabMenu() {
      setOpenTabMenu(false)
    }

    function clearBoard() {
        dispatch({
            type:'clear_board',
            status:status
        })
    }

  function deleteBoard() {
    clearBoard(status)
    dispatch({
      type:'delete_board',
      id:id
    })
  } 

    return (
        <div className ="w-full p-2.5 mb-5 bg-[#3b3e52]  gap-2.5 min-[600px]:w-[45%] min-[992px]:w-[30%] min-[1090px]:w-[22%]">

            <div className="w-full ">
                <div className="flex items-center justify-between border border-solid border-gray-600" style={{borderTop:`2px solid ${color}`}}>
                    <div className="flex items-center gap-[5px] p-2">
                        <p className="m-0">{title}</p>
                        <span>({length})</span>
                    </div>
                    <div className="text-[22px]">
                        <ion-icon name="settings-outline" size='medium' onClick={isTabMenuOpen} ></ion-icon>
                    </div>
                </div>
                <div className="flex flex-col items-center p-2.5">

                    {items.map((item) =>(
                        <TaskComponent 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            id={item.id}
                            status={item.status} 
                            boardsArray={boardsArray}
                            taskColor={taskColor}
                            
                        />
                    ))}
                </div>
            </div>
            <Modal show={openTabMenu} onClose={closeTabMenu}>
                <div className="flex items-center justify-content gap-2.5">
                    <button onClick={clearBoard} className="cursor-pointer bg-white text-black border border-black p-2.5">Clear Board</button>
                    <button onClick={deleteBoard} className="cursor-pointer bg-red-700 text-white border-none p-2.5">Delete Board</button>
                </div>
            </Modal>
        </div>
    )
     
}

export default BoardComponent