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
                        'MongoDB', "MySQL", "Express"],
                    datasets: [{
                        label: "Skills",
                        data: [100, 100, 100, 80, 90, 70, 70, 70],
                        backgroundColor: [
                            '#f1b503',
                            '#f1b503',
                            '#f1b503',
                            'rgba(241, 181, 3, 0.6)',
                            'rgba(241, 181, 3, 0.73)',
                            'rgba(241, 181, 3, 0.34)',
                            'rgba(241, 181, 3, 0.34)',
                            "rgba(241, 181, 3, 0.34)"
                        ]
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
                                fontColor: "white",
                                fontSize: "20"
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
