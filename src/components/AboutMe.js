import React from 'react'
import Graph from './Graph'

export default function AboutMe() {
    return (
        <>
        <div id="about-me" className="container-fluid text-center" style={{ backgroundColor: "#23286b", color: "white" }}>
                <div className="row" >
                    <div className="col ">
                        <h2 className="mb-4" style={{ fontFamily: "Times New Roman", fontWeight: "700", fontSize: "40px" }}>About Me</h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="offset-lg-2 col-lg-3 align-self-center">
                        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "18px", marginBottom: "40px" }}>
                            Love JavaScript and React. Node is cool too.
                            Proficient with the MERN stack. Main focus is developing
                            mobile first applications that people enjoy using.
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
