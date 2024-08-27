import BoardComponent from "./boardContainer"
import styles from './Board.module.css'
import { useState } from "react"

const boards = [
  {
    title:'Backlog',
    color:'red'
  },
  {
    title:'In progress',
    color:'orange'
  },
  {
    title:'Review',
    color:'blue'
  },
  {
    title:'Done',
    color:'green'
  }
]

function Board() {
  const [board,setBoard] = useState(boards)
  return (
    <div className={styles.mainBoardContainer}>
      {
        board.map((item,index) =>(
          <BoardComponent color={item.color} title={item.title} key={index}/>
        ))
      }
    </div>
  )
}

export default Board