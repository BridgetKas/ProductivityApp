import {Outlet} from "react-router-dom"
import styles from '../layOut/sidebar/sideBar.module.css'
import SideBarComponent from "../layOut/sidebar/sideBar"
import TopBar from "../Components/topBar/topBar"



function LayoutPage() {
  return (
    <div>
        <div><TopBar/></div>
        <div className={styles.bodyContainer} >
            <div className={styles.sideBar}><SideBarComponent/></div>
            <div className={styles.outlet}>
             <Outlet/>
            </div>
        </div>
    </div>

  )
}

export default LayoutPage