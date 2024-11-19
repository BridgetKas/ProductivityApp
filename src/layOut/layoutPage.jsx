import {Outlet} from "react-router-dom"
// import styles from '../layOut/sidebar/sideBar.module.css'
import SideBarComponent from "../layOut/sidebar/sideBar"
import TopBar from "../Components/topBar/topBar"
import StateProvider  from "./stateProvider"



function LayoutPage() {
  return (
    <div>
        <div><TopBar/></div>
        
        <div className="flex items-start w-[90%] my-0 mx-auto gap-5 justify-between" >

            <div className="p-2.5 mt-[128px] pt-0"><SideBarComponent/></div>
            <div className="flex-[2]">
              <StateProvider >
                <Outlet/>
              </StateProvider>
            </div>
        </div>
    </div>

  )
}

export default LayoutPage