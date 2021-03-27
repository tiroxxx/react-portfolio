import React from 'react'
import Graph from './Graph'

export default function AboutMe() {
    return (
        <>
        <div className="container-fluid">
            <div className="row" style={{ backgroundColor: "#017a0d" }}>
                <div className="col-sm" style={{ color: "white" }}>
                    <h3 >About Me</h3>
                    <p>Love JavaScript and React. Node is cool too.
                    Proficient with the MERN stack, but learning other stacks at the moment. <br />
                    </p>
                </div>
                <div className="col-sm">
                    <Graph />
                </div>
            </div>
        </div>
        </>
    )
}
