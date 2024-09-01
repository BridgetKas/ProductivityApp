import Modal from '../modal/modalComponent'
import styles from './Board.module.css'
import TaskComponent from './task'
import {useState} from 'react'

/* eslint-disable react/prop-types */

function BoardComponent({title,color,items}) {
    const [openTabMenu,setOpenTabMenu] = useState(false)
    const length = items.length


    function isTabMenuOpen(){
      setOpenTabMenu(true)
    }
  
    function closeTabMenu() {
      setOpenTabMenu(false)
    }

    function deleteBoard() {
        console.log('aya')
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
                    {items.map((item,index) =>(
                        <TaskComponent key={index} title={item.title} description={item.description} status={item.status} />
                    ))}
                </div>
            </div>
            <Modal show={openTabMenu} onClose={closeTabMenu}>
                <div >
                    <a onClick={deleteBoard} className={styles.boardTab}>Delete Board</a>
                </div>
            </Modal>
        </div>
    )
     
}

export default BoardComponent