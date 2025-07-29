
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement);

const Reports = () => {
  const data = {
    labels: ["Food", "Rent", "Utilities", "Others"],
    datasets: [
      {
        label: "Expenses",
        data: [400, 1200, 300, 150],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#AA65D2"]
      }
    ]
  };

  return (
    <div>
      <h2>Monthly Report</h2>
      <Bar data={data} />
    </div>
  );
};

export default Reports;
