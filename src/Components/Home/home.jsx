import TodoPage from "../BarChart/stat"
import styles from './homeComponent.module.css'
import ProjectSummary from "./projectSummary"
// import { useContext} from "react"

// const 

function Home() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.dashboardContainer}>
            <p className={styles.dashboard}>Dashboard</p>
            <div className = {styles.notifications}><ion-icon name="notifications-outline"></ion-icon></div>
        </div>
        <ProjectSummary />
        <TodoPage/>
    </div>
  )
}

export default Home