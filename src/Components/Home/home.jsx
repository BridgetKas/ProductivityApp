import HomeComponent from "./homeComponent"
import styles from './homeComponent.module.css'

function Home() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.dashboardContainer}>
            <p className={styles.dashboard}>Dashboard</p>
            <div className = {styles.notifications}><ion-icon name="notifications-outline"></ion-icon></div>
        </div>
        <div>
            <p className={styles.project}>Project Summary</p>
        </div>
        <div className={styles.mainContainer}>
            <HomeComponent color="orange" title="In Progress" number="89"/>
            <HomeComponent color="green" title="Completed" number="7"/>
            <HomeComponent color="red" title="BackLog" number="5"/>
            <HomeComponent color="blue" title = "Reviewing"number="10"/>
        </div>
    </div>
  )
}

export default Home