import React from 'react'
import { Image } from 'react-bootstrap'
import Bookmark from "../images/Bookmark.PNG"
import SubAway from "../images/SubAway.PNG"
import wineDines from "../images/wine&dines.JPG"

export default function Projects() {
    return (
        <div className="container-fluid">
            <div className="text-center my-4">
                <h2 style={{ fontSize: "55px", fontFamily: "Times New Roman", color: "#f1b522", fontWeight: "700" }}>
                    Projects
                </h2>
            </div>
            <div className="my-5 row bg-transparent">
                <div className="offset-lg-1 col-lg-6 align-self-center">
                    <Image src={SubAway} fluid rounded />
                </div>
                <div className="col-lg-4 align-self-center">
                    <a
                        href="https://subaway.herokuapp.com/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3 className="project-titles mt-3">
                            SubAway
                            <a className="ml-2" href="https://github.com/irasar/SubAway" target="_blank">
                                <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b503" }}></i>
                            </a>
                        </h3>
                    </a>

                    <p className="project-description">
                        SubAway is a Full Stack MEARN application where the user will enter their
                        subscriptions and they will be displayed in the order they are due.
                        This allows the user to cancel any subscriptions about to renew that
                        they no longer use. <span style={{ fontWeight: "700" }}> Technologies include </span>
                        HTML, CSS, JavaScript, React, MongoDB, Mongoose, Express, Auth0, RESTful APIs,
                        MD Bootstrap and Bootstrap.
                    </p>

                </div>
            </div>
            <div className="my-5 row bg-transparent">
                <div className="offset-lg-1 col-lg-6 align-self-center">
                    <Image src={wineDines} fluid rounded />
                </div>
                <div className="col-lg-4 align-self-center">
                    <a
                        href="https://andrewrb22.github.io/-.theFederationOfCoders-/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3 className="project-titles mt-3"
                        >Wine & Dines
                        <a className="ml-2" href="https://github.com/andrewrb22/-.theFederationOfCoders-" target="_blank">
                                <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b503" }}></i>
                            </a>
                        </h3>
                    </a>
                    <p className="project-description">
                        With Wine & Dines the user can choose from four of the provided
                        proteins and a recipe will be randomly selected and be paired with
                        wines that compliment this dish. <span style={{ fontWeight: "700" }}> Technologies include </span>
                        HTML, CSS, JavaScript, jQuery, RESTful APIs and the Materialize framework.
                    </p>
                </div>
            </div>
            <div className="my-5 row bg-transparent">
                <div className="offset-lg-1 col-lg-6 align-self-center">
                    <Image atl="cloud storage" fluid rounded />
                </div>
                <div className="col-lg-4 align-self-center">
                    <a
                        href="https://cloud-personal-storage.web.app/login"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3 className="project-titles mt-3">
                            Personal Cloud Storage
                            <a className="ml-2" href="https://github.com/tiroxxx/CloudPersonalStorage" target="_blank">
                                <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b503" }}></i>
                            </a>
                        </h3>
                    </a>
                    <p className="project-description">
                        This app is powered by Firebase Authentication, Storage, and Firestore.
                        With this app the user can store their files on the cloud and access them
                        wherever they may need them. <span style={{ fontWeight: "700" }}> Technologies include </span>
                        HTML, CSS, JavaScript, React, React-Bootstrap, and Bootstrap.
                    </p>
                </div>
            </div>
            <div className="my-5 row bg-transparent">
                <div className="offset-lg-1 col-lg-6 align-self-center">
                    <Image atl="Spotify Lyrical" fluid rounded />
                </div>
                <div className="col-lg-4 align-self-center">
                    <a
                        href="https://spotify-lyrical.herokuapp.com/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3 className="project-titles mt-3">
                            Spotify Lyrical
                            <a className="ml-2" href="https://github.com/tiroxxx/spotify-clone" target="_blank">
                                <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b503" }}></i>
                            </a>
                        </h3>
                    </a>
                    <p className="project-description">
                        Powered by the Spotify API, with Spotify Lyrical you can get the lyrics for
                        the songs you know and love using your spotify account.
                        <span style={{ fontWeight: "700" }}> Technologies include </span>
                        HTML, CSS, JavaScript, React, Express, RESTful APIs, and the Bootstrap
                        framework.

                    </p>
                </div>
            </div>
            <div className="my-5 row bg-transparent">
                <div className="offset-lg-1 col-lg-6 align-self-center">
                    <Image src={Bookmark} alt="Bookmark" fluid rounded />
                </div>
                <div className="col-lg-4 align-self-center">
                    <a
                        href="https://whispering-cove-53195.herokuapp.com/loggedin"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3 className="project-titles mt-3">
                            Bookmark
                            <a className="ml-2" href="https://github.com/brigil/Bookmark" target="_blank">
                                <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b503" }}></i>
                            </a>
                        </h3>
                    </a>
                    <p className="project-description">
                        With Bookmark you can search for books inside our database,
                        learn about the book you selected with the synopsis,
                        or even select books from the recommended section.
                        <span style={{ fontWeight: "700" }}> Technologies include </span> HTML, CSS, JavaScript, jQuery, MySQL, Sequelize, Express, and the Bulma framework.
                    </p>
                </div>
            </div>
        </div>
    )
}
