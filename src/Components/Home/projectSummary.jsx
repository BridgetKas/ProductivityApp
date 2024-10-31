import HomeComponent from './homeComponent';
import styles from './homeComponent.module.css';
import { useContext } from 'react';
import { StateContext } from '../../layOut/stateProvider';



function ProjectSummary() {
    const {state} = useContext(StateContext)
    const tasksArray = state.tasks
  return (
    <div>
        <div>
            <p className={styles.project}>Project Summary</p>
        </div>
        <div className={styles.mainContainer}>

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