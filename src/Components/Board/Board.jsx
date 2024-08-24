
import styles from './Board.module.css'
/* eslint-disable react/prop-types */
function BoardComponent({title,color,children,totalItems}) {
  return (
    <div className = {styles.mainBoard}>
        <div className={styles.board}>
            <div className={styles.titleContainer}>
                <div className={styles.header}>
                    <p className={styles.title}>Title</p>
                    <span>(55)</span>
                </div>
                <div>
                    <ion-icon name="ellipsis-vertical-outline" size='medium'></ion-icon>
                </div>
            </div>
            <div className={styles.taskListContainer}>
                <div className={styles.taskList}>
                    <div className={styles.listColor}></div>
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
                <div className={styles.taskList}>
                    <div className={styles.listColor}></div>
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
              
             
            </div>
        </div>
        
        
        
    </div>

  )
}

export default BoardComponent