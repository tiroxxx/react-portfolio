import React from 'react'
import Graph from './Graph'

export default function AboutMe() {
    return (
        <>
            <div className="container-fluid row" style={{ backgroundColor: "#23286b" }}>
                <div className="offset-sm-1 col-sm-4" style={{ color: "white" }}>
                    <h3 style={{ fontFamily: "Times New Roman", fontWeight: "700" }}>About Me</h3>
                    <p style={{ fontFamily: "DM Sans" , fontSize: "18px"}}>Love JavaScript and React. Node is cool too.
                    Proficient with the MERN stack, but learning other stacks at the moment. <br />
                    </p>
                </div>
                <div className="col-sm-6">
                    <Graph />
                </div>
            </div>
        </>
    )
}
