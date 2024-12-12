import TodoPage from "../BarChart/stat"
import ProjectSummary from "./projectSummary"
// import { useContext} from "react"


function DashBoard() {
  return (

    <div className="w-[95%] mx-auto my-12">
        <div className="flex items-center justify-between p-2.5">
            <p className="mx-0 my-1.5 text-xl text-white">Dashboard</p>
            <div className ="text-white text-[22px]"><ion-icon name="notifications-outline"></ion-icon></div>
        </div>
        <ProjectSummary />
        <TodoPage/>
    </div>
  )
}

export default DashBoard