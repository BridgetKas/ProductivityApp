import  { useState ,useContext, useEffect,useCallback} from 'react';
import ActivityBarChart from './ActivityBarChart';
import {StateContext} from '../../layOut/stateProvider';
import { getYearMonthDate } from '../../utilis';
import { getDay } from '../../utilis';



const TodoPage = () => {
  const [labels, setLabels] = useState([])
  const [datasetArray, setDatasetArray] = useState([])
  const {state} = useContext(StateContext)
  const boards = state.boards
  const tasksArray = state.tasks
  const eventsArray = state.events


  const getDatasetFromTaskArray = useCallback(() => {
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

    function getEventsBasedOnDayUpdated() {
      const today = new Date();
      const sevenDaysAgo = new Date(today.setDate(today.getDate() - 7));

      const datesArray = eventsArray.filter(event => {
        const eventDate = new Date (event.date);
        return eventDate >= sevenDaysAgo;
      });

      let labelDays = []
      let groupedEvents = {}
      for (let i = 0; i < 8; i++) {
        const fixed = new Date(sevenDaysAgo)
        let eventDate = new Date(fixed.setDate(fixed.getDate() + i))
        let key = getYearMonthDate(eventDate)
        let day = getDay(key)
        labelDays.push(day)
        const values = datesArray.filter((event) => {
          let date = new Date(event.date)
          let ValueString = getYearMonthDate(date)
          return (ValueString === key)
        })
        groupedEvents[key] = values
      }
      setLabels(labelDays)
    }
    getEventsBasedOnDayUpdated()
  }, [boards,tasksArray,eventsArray])
  
  useEffect(() => {
    getDatasetFromTaskArray()
  },[boards,tasksArray,eventsArray,getDatasetFromTaskArray])



  return (
    <div>
      <h1>Daily Tasks Accomplished</h1>
      <ActivityBarChart  dataset={datasetArray} labels={labels}/>
    </div>
  );
};

export default TodoPage;
