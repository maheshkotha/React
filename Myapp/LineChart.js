import React from 'react'
import { Line } from 'react-chartjs-2';
const LineChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'March', "April", "May"],
        datasets: [
            {
                label: 'sales for 2020 (M)',
                data: [3, 2, 2,1, 5],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBorderColor: ['rgba(255, 206, 86, 0.2)']
            },
            {
                label: 'sales for 2019 (M)',
                data: [1,3,2,3,4],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBorderColor: ['rgba(54, 162, 235, 0.2)']
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: "Line Chart"
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
            <Line 
                data ={data}
                options={options}
            />
        </div>
    )
}

export default LineChart
