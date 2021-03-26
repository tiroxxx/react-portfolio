import React from 'react'
import { Jumbotron } from "react-bootstrap"

export default function JumbotronComponent() {
    return (
        <>
            <Jumbotron className="bg-transparent">
                <div className="row">
                    <div className="col-sm">
                        <h1>Christian Marquez</h1>
                        <p>
                            I am a Full-Stack developer, eager to continue leaning and contribute to big projects.
                            Full-time developer, part-time nerd, free-time gamer.
                        </p>
                    </div>
                    <div className="col-sm">
                        <img src="./StarWars.JPG" alt="starwars" />
                    </div>
                </div>
            </Jumbotron>

        </>
    )
}
