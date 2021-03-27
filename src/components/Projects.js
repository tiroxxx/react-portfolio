import React from 'react'
import { Image } from 'react-bootstrap'
import Bookmark from "../images/Bookmark.PNG"

export default function Projects() {
    return (
        <>
            <div className="text-center">
                <h2 style={{ color: "#f1b522" }}>
                    Projects
            </h2>
            </div>
            <div className="row bg-success">
                <div className="col-sm">
                    <Image src={Bookmark} fluid rounded />
                </div>
                <div className="col-sm">
                    <a
                        href="https://whispering-cove-53195.herokuapp.com/loggedin"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522"}}
                    >
                        <h3>Bookmark</h3>
                    </a>
                    <p>
                        With Bookmark you can search for books inside our database,
                        learn about the book you selected with the synopsis,
                        or even select books from the recommended section.
                        Technologies include HTML, CSS, JavaScript, jQuery, MySQL, Sequelize, Express, and the Bulma framework.
                    </p>

                </div>
            </div>
        </>
    )
}
