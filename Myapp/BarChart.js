import React from 'react'
import { Bar } from 'react-chartjs-2';
const BarChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'March', "April", "May"],
        datasets: [
            {
                label: 'sales for 2020 (M)',
                data: [3, 2, 2,1, 5],
                borderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ]
               
            },
            {
                label: 'sales for 2019 (M)',
                data: [1,3,2,3,4],
                borderColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ]
                
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: "Bar Chart"
        },
        scales: {
            yAxes:[
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    return (
        <div className="chart">
            <Bar 
                data ={data}
                options={options}
            />
        </div>
    )
}

export default BarChart
