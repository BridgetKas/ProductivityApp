import  { useState } from 'react';
import ActivityBarChart from './ActivityBarChart';

const tasks = {
    completed:[3, 5, 2, 6, 7, 4, 1],
    reviewed:[3, 5, 2, 6, 7, 4, 1],
    inProgress:[3, 5, 2, 6, 7, 4, 1],
}

const TodoPage = () => {
  const [activityData, setActivityData] = useState(tasks); // Example data

  return (
    <div>
      <h1>Daily Tasks Accomplished</h1>
      <ActivityBarChart activityData={activityData} />
    </div>
  );
};

export default TodoPage;
