import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import 'chart.js/auto';

Chart.register(...registerables); // Register necessary chart components

const AnalyseGraph = (props) => {
    const values = props.content;
    const analyse_sems = values.analyse_sems;
    const analyse_gpa = values.analyse_gpa;
    const analyse_cgpa = values.analyse_cgpa;
    const analyse_min_cgpa = values.analyse_min_cgpa;
    const analyse_max_cgpa = values.analyse_max_cgpa;
    const range = analyse_max_cgpa - analyse_min_cgpa;
    const stepSize = Math.max(0.1, range / 10);
    const chartRef = useRef(null); // Reference to the canvas element
    const chartInstance = useRef(null); // To store the Chart.js instance

    useEffect(() => {
        // Destroy the previous chart instance if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");

        // Create a new chart
        chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: analyse_sems,
                datasets: [
                    {
                        label: "GPA",
                        data: analyse_gpa,
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                    },
                    {
                        label: "CGPA",
                        data: analyse_cgpa,
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            color: "#ffffff", // White color for x-axis labels
                        },
                    },
                    y: {
                        ticks: {
                            color: "#ffffff", // White color for y-axis labels
                            stepSize: stepSize
                        },
                        beginAtZero: false,
                        min: analyse_min_cgpa,
                        max: analyse_max_cgpa,
                    },
                },
            },
        });

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [analyse_sems, analyse_gpa, analyse_cgpa, analyse_min_cgpa, analyse_max_cgpa]);

    return (
        <div style={{position: "relative", height: "400px", width: "350px" ,display : "flex", justifyContent: "center" , alignItems: "center" , flexDirection: "column"}}>
            <p className="fs-m my-3 fw-bold primary-text-color">{props.title}</p>
            <canvas id="myChart" ref={chartRef}></canvas>
            <p  className="fs-xs my-3 fw-medium primary-text-color">{props.description}</p>
        </div>
    );
};

export default AnalyseGraph;
