import React, { useEffect } from "react";

const MyChart = ({ chartId }) => {
  useEffect(() => {
    const canvasRef = document.getElementById(chartId);

    // Create a new Chart instance
    const ctx = canvasRef.getContext("2d");

    const generateRandomData = (count) => {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          x: Math.random() * 20 - 10, // Random x value between -10 and 10
          y: Math.random() * 20 - 10, // Random y value between -10 and 10
        });
      }
      return data;
    };

    const data = {
      datasets: [
        {
          label: "Dataset 1",
          data: generateRandomData(100), // Generate 100 random data points
          backgroundColor: "rgb(255, 99, 132)",
        },
        {
          label: "Dataset 2",
          data: generateRandomData(100), // Generate 100 random data points
          backgroundColor: "#00a651",
        },
        {
          label: "Dataset 3",
          data: generateRandomData(100), // Generate 100 random data points
          backgroundColor: "#FAAF40",
        },
      ],
    };

    const myChart = new window.Chart(ctx, {
      type: "scatter",
      data,
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
        },
      },
    });

    // Cleanup function
    return () => {
      myChart.destroy(); // Destroy the chart instance to avoid memory leaks
    };
  }, [chartId]);

  return <canvas id={chartId} width="400" height="200" />;
};

export default MyChart;
