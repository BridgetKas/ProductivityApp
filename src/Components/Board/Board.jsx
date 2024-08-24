import BoardComponent from "./boardContainer"
import styles from './Board.module.css'

function Board() {
  return (
    <div className={styles.mainBoardContainer}>
        <BoardComponent color='red' title='Backlog'/>
        <BoardComponent color='orange' title='In progress'/>
        <BoardComponent color='green' title='Review'/>
        <BoardComponent color='blue' title='Done'/>
    </div>

  )
}

export default Board