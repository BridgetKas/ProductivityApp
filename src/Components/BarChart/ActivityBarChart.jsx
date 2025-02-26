import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import styles from './barChart.module.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


/* eslint-disable react/prop-types */
const ActivityBarChart = ({ dataset ,labels}) => {
  const chartData = {
    // labels:labelData,
    labels:labels,
    datasets: dataset
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks:{
          stepSize:1,
        }
      },
    },
  };
  // console.log(labels)

  return(
    <div className="w-[400px] mx-auto my-0 flex items-center justify-center sm:w-[500px] md:w-[600px] min-[992px]:w-[900px] lg:w-1200px">
      <Bar data={chartData} options={options}  />
    </div>

  )

};

export default ActivityBarChart;
