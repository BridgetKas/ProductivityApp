import styles from './Board.module.css'

/* eslint-disable react/prop-types */
function TaskComponent({status,title,description}) {
    const colorBar = {
        inComplete:'red',
        complete:'green',
        inprogress:'orange',
        reviewing:'blue'
    }
  return (
    <div className={styles.taskList}>
        <div className={styles.listColor} style={{backgroundColor:colorBar[status] }} ></div>
        <div className={styles.todos}>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
            <div className={styles.closeContainer} >
                <ion-icon name="close-outline"  className={styles.close}></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default TaskComponent