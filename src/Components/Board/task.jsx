import styles from './Board.module.css'

/* eslint-disable react/prop-types */
function TaskComponent({status}) {
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
                <p>Splash Screen</p>
                <p>The book itself is surprisingly thin and it &apos;s</p>
            </div>
            <div>
                <ion-icon name="link-outline"></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default TaskComponent