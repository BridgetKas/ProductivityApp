import { IoHomeOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import styles from './sideBar.module.css'

const sidebar = [
    {
        title:'Home',
        icon : <IoHomeOutline/>,
        id:1,
        path:'/'
    },
    {
        title:'Tasks',
        icon:<FaTasks/>,
        id:2,
        path:'/tasks'
    },
    {
        title:'Settings',
        icon:<IoSettingsOutline/>,
        id:3,
        path:'/settings'
    },
    {
        title:'Exit',
        icon:<PiSignOutFill/>,
        id:4,
        path:'/exit'
    }
]



function SideBarComponent() {
  return (
    <div className={styles.sidebarContainer}>
        {
            sidebar.map(item =>(
                <div key={item.id} className={styles.sideLink}>
                    <NavLink to={item.path} className={styles.icon}>{item.icon}</NavLink>
                    <span>{item.title}</span>
                </div>
            ))
        }
    </div>
  )
}

export default SideBarComponent