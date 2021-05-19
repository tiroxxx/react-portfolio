import React, { useRef, useEffect } from 'react'
import Graph from './Graph'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AboutMe() {

    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    //scroll animation for title
    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector("#about-me-title"),
            {
                opacity: 0,
                y: -80
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: element.querySelector("#about-me-title"),
                    start: "200 80%",
                    end: "300 70%",
                    scrub: true,
                    toggleActions: "restart none reverse none"
                }
            },
        )
    }, [])
    //scroll animation for synopsis
    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector("#synopsis"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector("#synopsis"),
                    start: "center 80%",
                    scrub: true,
                    end: "+=100% 70%",
                    toggleActions: "restart none reverse none"
                }
            }
        )
    }, [])
    //scroll animation for graph
    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector("#graph"),
            {
                opacity: 0,
                x: 100
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: element.querySelector("#graph"),
                    start: "center 80%",
                    scrub: true,
                    end: "+=50% 70%",
                    toggleActions: "restart none reverse none"
                }
            }
        )
    }, [])

    return (
        <>
            <div ref={ref} id="about-me" className="container-fluid text-center" style={{ backgroundColor: "#23286b", color: "white" }}>
                <div className="row" >
                    <div className="col ">
                        <h2 id="about-me-title" className="mb-4" style={{ fontFamily: "Times New Roman", fontWeight: "700", fontSize: "40px" }}>About Me</h2>
                    </div>
                </div>
                <div className="row" >
                    <div id="synopsis" className="offset-lg-2 col-lg-3 align-self-center">
                        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "22px", marginBottom: "40px" }}>
                            Love JavaScript and React. Node is cool too.
                            Proficient with the MERN stack while focusing in developing
                            mobile first applications that people enjoy using.
                        </p>
                    </div>
                    <div id="graph" className="col-lg-6">
                        <Graph />
                    </div>
                </div>
            </div>
        </>
    )
}
