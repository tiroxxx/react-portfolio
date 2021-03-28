import React from 'react'
import Graph from './Graph'

export default function AboutMe() {
    return (
        <>
        <div className="container-fluid">
            <div id="about-me" className="row" style={{ backgroundColor: "#23286b" }}>
                <div className="offset-lg-1 col-lg-4 text-center" style={{ color: "white" }}>
                    <h2 className="mb-4" style={{ fontFamily: "Times New Roman", fontWeight: "700", fontSize: "40px" }}>About Me</h2>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "22px", marginBottom: "40px" }}>
                        Love JavaScript and React. Node is cool too.
                        Proficient with the MERN stack, but learning other stacks at the moment.
                    </p>
                </div>
                <div className="col-lg-6">
                    <Graph />
                </div>
            </div>
        </div>
        </>
    )
}
