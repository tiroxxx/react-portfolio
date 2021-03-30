import React from 'react'
import { Jumbotron, Image } from "react-bootstrap"
import PortfolioPicture from "../images/Portfolio-Picture.jpg"
import Resume from "../images/Resume-2021.pdf"

export default function JumbotronComponent() {
    return (
        <>
            <Jumbotron className="bg-transparent">
                <div className="row">
                    <div className="offset-lg-2 offset-xl-3 col-lg-5 col-xl-3 align-self-center text-end mb-3">
                        <h1 id="name">Christian Marquez</h1>
                        <p style={{ color: "#23286b", fontSize: "18px", fontFamily: 'DM Sans, sans-serif' }}>
                            <span style={{ fontWeight: "700" }}>I am a Full-Stack developer, </span>
                            eager to continue learning and contribute to big projects.
                            <span style={{ fontWeight: "700" }}> Full-time developer, part-time nerd, free-time gamer.</span>
                        </p>
                    </div>
                    <div className="col-lg-3 text-center">
                        <Image src={PortfolioPicture} alt="Christian Marquez" fluid roundedCircle />
                    </div>
                </div>
            </Jumbotron>

        </>
    )
}
