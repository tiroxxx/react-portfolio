import React from 'react'
import { Bar } from "react-chartjs-2"

export default function Graph() {
    return (
        <>
            <Bar
                data={{
                    labels: ['HTML'
                        , 'CSS', 'JavaScript',
                        'React', 'Node',
                        'MongoDB', "Express"],
                    datasets: [{
                        label: "Skills",
                        data: [100, 100, 100, 80, 90, 70, 70]
                    }]

                }}
                options={{
                    legend: {
                        labels: {
                            fontColor: "white"
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontColor: "white"
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "white"
                            }
                        }],
                    },
                }}
            />
        </>
    )
}
