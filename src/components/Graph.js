import React from 'react'
import { Bar } from "react-chartjs-2"

export default function Graph() {
    return (
        <div>
            <Bar
                data={{
                    labels: ['HTML'
                    , 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', "Express"],
                }}
            />
        </div>
    )
}
