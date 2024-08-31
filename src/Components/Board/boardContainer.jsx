import styles from './Board.module.css'
import TaskComponent from './task'

/* eslint-disable react/prop-types */

function BoardComponent({title,color,items}) {
  return (
    <div className = {styles.mainBoard}>
        <div className={styles.board}>
            <div className={styles.titleContainer} style={{borderTop:`2px solid ${color}`}}>
                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <span>(55)</span>
                </div>
                <div>
                    <ion-icon name="ellipsis-vertical-outline" size='medium'></ion-icon>
                </div>
            </div>
            <div className={styles.taskListContainer}>
                {items.map((item,index) =>(
                    <TaskComponent key={index} title={item.title} description={item.description} status={item.status}/>
                ))}
            </div>
        </div>
    </div>

  )
}

export default BoardComponent