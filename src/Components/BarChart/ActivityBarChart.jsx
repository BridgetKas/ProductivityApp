import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


/* eslint-disable react/prop-types */
const ActivityBarChart = ({ activityData }) => {
  const chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Customize as needed
    datasets: [
      {
        label: 'Completed',
        data: activityData.completed, // Pass in completed tasks per day as an array
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0.2,
      },
      {
        label: 'Reviewed',
        data: activityData.reviewed, // Pass in completed tasks per day as an array
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 0.2,
      },
      {
        label: 'In Progress',
        data: activityData.inProgress, // Pass in completed tasks per day as an array
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ActivityBarChart;
