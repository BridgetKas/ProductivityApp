import Modal from '../modal/modalComponent'
import styles from './Board.module.css'
import TaskComponent from './task'
import {useState} from 'react'

/* eslint-disable react/prop-types */

function BoardComponent({title,color,items, updateTask,clearBoard,deleteBoard,deletingTask,boardsArray}) {
    const [openTabMenu,setOpenTabMenu] = useState(false)
    const length = items.length


    function isTabMenuOpen(){
      setOpenTabMenu(true)
    }
  
    function closeTabMenu() {
      setOpenTabMenu(false)
    }


 
    return (
        
        <div className = {styles.mainBoard}>
            <div className={styles.board}>
                <div className={styles.titleContainer} style={{borderTop:`2px solid ${color}`}}>
                    <div className={styles.header}>
                        <p className={styles.title}>{title}</p>
                        <span>({length})</span>
                    </div>
                    <div className={styles.settings}>
                        <ion-icon name="settings-outline" size='medium' onClick={isTabMenuOpen} ></ion-icon>
                    </div>
                </div>
                <div className={styles.taskListContainer}>
                    {items.map((item) =>(
                        <TaskComponent 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            id={item.id}
                            status={item.status} 
                            updateTask={(uT,uD,uS,id)=>updateTask(uT,uD,uS,id)}
                            passDeletingTask={(id) => deletingTask(id)}
                            boardsArray={boardsArray}
                        />
                    ))}
                </div>
            </div>
            <Modal show={openTabMenu} onClose={closeTabMenu}>
                <div className={styles.eraseContainer}>
                    <button onClick={clearBoard} className={styles.clearBtn}>Clear Board</button>
                    <button onClick={deleteBoard} className={styles.deleteBtn}>Delete Board</button>
                </div>
            </Modal>
        </div>
    )
     
}

export default BoardComponent