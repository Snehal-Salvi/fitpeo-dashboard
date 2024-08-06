import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import styles from "./Activity.module.css";
import data from "./Data";

export default function ActivityChart() {
  // Activity chart data
  const chartData = {
    labels: data.map((d) => d.day.toString()),
    datasets: [
      {
        label: "Values",
        data: data.map((d) => d.count),
        backgroundColor: "#6699ff",
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 1.2,
        categoryPercentage: 0.6,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
          callback: function (value, index) {
            return value % 2 === 0 ? this.getLabelForValue(value) : "";
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 15000,
        ticks: {
          color: "#ffffff",
          stepSize: 5000,
          callback: function (value) {
            if (value >= 1000) {
              return `${value / 1000}k`;
            }
            return value;
          },
        },
        grid: {
          color: "#444",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      {/* Render the activity chart */}
      <Bar data={chartData} options={options} />
    </div>
  );
}
