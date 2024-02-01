import React from "react"; // Importing the React library

import { Bar } from "react-chartjs-2"; // Importing the Line component from the react-chartjs-2 library

// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
// Setting up the labels for the x-axis of the chart
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "Septempber",
  "October",
  "Novermber",
  "December",
];

// Setting up the data for the chart, including the labels and datasets
const data = {
  labels: labels,
  datasets: [
    {
      label: "Orders for each month", // Setting up the label for the dataset
      backgroundColor: "rgb(94, 79, 224)", // Setting up the background color for the dataset
      borderColor: "rgb(94, 79, 224)", // Setting up the border color for the dataset
      data: [321, 231, 552, 123, 321, 477, 32, 214, 134, 46, 663, 433], // Setting up the data for the dataset
    },
  ],
};

// Defining the LineChart component
const LineChart = () => {
  return (
    <div className="w-full max-w-5xl px-5 mx-auto">
      <div className="px-5 py-5 bg-white border rounded-md shadow-md">
        <Bar data={data} className="w-full mx-0" />
      </div>
    </div>
  );
};

export default LineChart; // Exporting the LineChart component as the default export of the module
