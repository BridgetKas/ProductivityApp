import HomeComponent from './homeComponent';
import { useContext } from 'react';
import { StateContext } from '../../layOut/stateProvider';



function ProjectSummary() {
    const {state} = useContext(StateContext)
    const tasksArray = state.tasks
  return (
    <div>
        <div>
            <p className="text-white text-left pl-[10px] my-[5px] mx-0">Project Summary</p>
        </div>
        <div className="flex items-center justify-between p-2.5 flex-wrap">

            {
                state.boards.map((board,index) =>(
                    <HomeComponent 
                        key={index} 
                        color={board.color} 
                        title={board.title} 
                        number={tasksArray.filter((task) => (task.status === board.status)).length}
                    />
                ))
            }
           
        </div>

    </div>
  )
}

export default ProjectSummary