import { IoSearch } from "react-icons/io5";
import styles from './topBar.module.css'
import { RiBearSmileFill } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import {useState} from "react"
import Modal from "../modal/modalComponent"


function TopBar() {

    const [openModal,setOpenModal] = useState(false)
    const [title,setTitle] = useState('')

    function isModalOpen() {
        setOpenModal(true)
    }

    function closeModal(){
        setOpenModal(false)
    }

  return (
    <header>
        <div className={styles.topBarContainer}>
            <div className={styles.mainsearchContainer}>
                <div className={styles.search}>
                    <IoSearch style={{ fontSize: '30px', }}/>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" className={styles.input} placeholder="Search"/>
                </div>
            </div>
            <div className={styles.authorContainer}>
                <div>
                    <p>Bizzy Bridget</p>
                </div>
                <div>
                    <RiBearSmileFill style={{fontSize:"40px"}} />
                </div>
            </div>
        </div>
        <div>
            <div className={styles.features}>
                <div className={styles.mainiconContainer}>
                    <div className={styles.iconContainer}>
                        <div className={styles.circleIcon}>
                            <FaRegCircle  style={{color:'red'}}/>
                        </div>
                        <p>Task</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.circleIcon}>
                            <FaRegCircle  style={{color:'orange', fontSize:'18px'}}/>
                        </div>
                        <p>Story</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.circleIcon}>
                            <FaRegCircle  style={{color:'green'}}/>
                        </div>
                        <p>Bug</p>
                    </div>
                </div>
                <div className={styles.taskContainer}>
                    <div>
                        <button onClick={isModalOpen}>Add a Task</button>
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.button}>Add a Board</button>
                    </div>
                </div>
            </div>
        </div>
        <Modal show={openModal} onClose={closeModal}>
                <div className={styles.textareaContainer}>
                    <input type='text' placeholder='Enter a title...' value={title} className={styles.taskInput} onChange={(e) => setTitle(e.target.value)}/>
                    <textarea id="story" rows="5" cols="33" placeholder='Enter a description' className={styles.textarea}> </textarea>
                </div>
                <div className='modalContainer'>
                    <button className={styles.saveBtn} onClick=''>Save</button>
                </div>
       </Modal>
    </header>
  )
}

export default TopBar