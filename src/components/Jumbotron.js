import React, { useRef, useEffect } from 'react'
import { Jumbotron, Image } from "react-bootstrap"
import PortfolioPicture from "../images/Portfolio-Picture.jpg"
import { gsap, Power3 } from "gsap"

export default function JumbotronComponent() {

    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector("#my-info"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                duration: 1.5
            }
        )
    }, [])
    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector("#picture"),
            {
                opacity: 0,
                x: 100
            },
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                duration: 2
            }
        )
    }, [])

    return (
        <>
            <Jumbotron className="bg-transparent">
                <div ref={ref} className="row">
                    <div id="my-info" className="offset-lg-2 offset-xl-3 col-lg-5 col-xl-3 align-self-center text-end mb-3">
                        <h1 id="name">Christian Marquez</h1>
                        <p style={{ color: "#23286b", fontSize: "18px", fontFamily: 'DM Sans, sans-serif' }}>
                            <span style={{ fontWeight: "700" }}>I am a Full-Stack developer, </span>
                            eager to continue learning and contribute to big projects.
                            <span style={{ fontWeight: "700" }}> Full-time developer, part-time nerd, free-time gamer.</span>
                        </p>
                    </div>
                    <div id="picture" className="col-lg-3 text-center">
                        <Image src={PortfolioPicture} alt="Christian Marquez" fluid roundedCircle />
                    </div>
                </div>
            </Jumbotron>
        </>
    )
}
