import  { useState ,useContext, useEffect} from 'react';
import ActivityBarChart from './ActivityBarChart';
import {StateContext} from '../../layOut/stateProvider';

// const tasks = {
//     completed:[3, 5, 2, 6, 7, 4, 1],
//     reviewed:[3, 5, 2, 6, 7, 4, 1],
//     inProgress:[3, 5, 2, 6, 7, 4, 1],
// }

const TodoPage = () => {
  // const [activityData, setActivityData] = useState(tasks); 
  const [labels, setLabels] = useState([])
  const [datasetArray, setDatasetArray] = useState([])
  const {state} = useContext(StateContext)
  const boards = state.boards
  const tasksArray = state.tasks

  useEffect(() => {
    const boardTitles = ()=> {
      const statusArray = []
      for (const element of boards) {
          if(!statusArray.includes(element.title)){
          statusArray.push(element.title)
        }           
      }
      setLabels(statusArray)
    }
    
    const getDatasetFromTaskArray = () => {
      let totalTasks = {}
      for (const task of tasksArray) {
        if(totalTasks[task.status]) {
          totalTasks[task.status] ++
        }else {
          totalTasks[task.status] = 1
        }
      }
      const datasetArray = []
      const data = []
      
      for(const board of boards) {
        data.push((totalTasks[board.status])?? 0)
      }

      datasetArray.push({
        label: 'taskSummary',
        data: data, // Pass in completed tasks per day as an array
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: 2,
        })
      setDatasetArray(datasetArray)
    }
    getDatasetFromTaskArray()
    boardTitles()
  },[boards,tasksArray])

  return (
    <div>
      <h1>Daily Tasks Accomplished</h1>
      <ActivityBarChart  labelData={labels} dataset={datasetArray}/>
    </div>
  );
};

export default TodoPage;
