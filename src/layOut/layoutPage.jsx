import {Outlet} from "react-router-dom"
import styles from '../layOut/sidebar/sideBar.module.css'
import SideBarComponent from "../layOut/sidebar/sideBar"



function LayoutPage() {
  return (
    <div>
        <div>This is the Nav Bar</div>
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