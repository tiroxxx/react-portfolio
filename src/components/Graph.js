import React from 'react'
import { HorizontalBar } from "react-chartjs-2"

export default function Graph() {
    return (
        <>
            <HorizontalBar
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
                                fontColor: "white"
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontColor: "white"
                            }
                        }],
                    },
                }}
            />
        </>
    )
}
