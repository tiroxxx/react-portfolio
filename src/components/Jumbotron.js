import React from 'react'
import { Jumbotron, Image } from "react-bootstrap"
import PortfolioPicture from "../images/Portfolio-Picture.jpg"

export default function JumbotronComponent() {
    return (
        <>
            <Jumbotron className="bg-transparent">
                <div className="row">
                    <div className="col-sm align-self-center">
                        <h1 id="name">Christian Marquez</h1>
                        <p id="">
                            I am a Full-Stack developer, eager to continue learning and contribute to big projects.
                            Full-time developer, part-time nerd, free-time gamer.
                        </p>
                    </div>
                    <div className="col-sm mx-auto text-center">
                        <Image src={PortfolioPicture} alt="Christian Marquez" fluid roundedCircle/>
                    </div>
                </div>
            </Jumbotron>

        </>
    )
}
