import React from 'react'
import { Image } from 'react-bootstrap'
import Bookmark from "../images/Bookmark.PNG"
import SubAway from "../images/SubAway.PNG"
import WineDines from "../images/wine&dines.JPG"
import PersonalCloud from "../images/personal-cloud.png"
import SpotifyLyrical from "../images/spotify-lyrical.png"

export default function Projects() {
    return (
        <div className="container-fluid" id="projects">
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
                    <a className="project-titles mt-3 link"
                        href="https://subaway.herokuapp.com/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        SubAway
                    </a>
                    <a className="ml-2" href="https://github.com/irasar/SubAway" target="_blank">
                        <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b522" }}></i>
                    </a>
                    <p className="project-description">
                        SubAway is a Full Stack MEARN application where the user will enter their
                        subscriptions and they will be displayed in the order they are due.
                        This allows the user to cancel any subscriptions about to renew that
                        they no longer use.
                    </p>
                    <p className="project-description">
                        <span style={{ fontWeight: "700", fontSize: "22px" }}> Technologies: </span>
                        HTML, CSS, JavaScript, React, MongoDB, Mongoose, Express, Auth0, RESTful APIs,
                        MD Bootstrap and Bootstrap.
                    </p>

                </div>
            </div>
            <div className="my-5 row bg-transparent">
                <div className="offset-lg-1 col-lg-6 align-self-center">
                    <Image src={WineDines} fluid rounded />
                </div>
                <div className="col-lg-4 align-self-center">
                    <a className="project-titles mt-3"
                        href="https://andrewrb22.github.io/-.theFederationOfCoders-/"
                        target="_blank"
                        style={{ textDecoration: "none", }}
                    >
                        Wine & Dines
                    </a>
                    <a className="ml-2" href="https://github.com/andrewrb22/-.theFederationOfCoders-" target="_blank">
                        <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b522" }}></i>
                    </a>
                    <p className="project-description">
                        With Wine & Dines the user can choose from four of the provided
                        proteins and a recipe will be randomly selected and be paired with
                        wines that compliment this dish.
                    </p>
                    <p className="project-description">
                        <span style={{ fontWeight: "700", fontSize: "22px" }}> Technologies: </span>
                        HTML, CSS, JavaScript, jQuery, RESTful APIs and the Materialize framework.
                    </p>


                </div>
            </div>
            <div className="my-5 row bg-transparent">
                <div className="offset-lg-1 col-lg-6 align-self-center">
                    <Image src={PersonalCloud} atl="cloud storage" fluid rounded />
                </div>
                <div className="col-lg-4 align-self-center">
                    <a className="project-titles mt-3"
                        href="https://cloud-personal-storage.web.app/login"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        Personal Cloud Storage
                    </a>
                    <a className="ml-2" href="https://github.com/tiroxxx/CloudPersonalStorage" target="_blank">
                        <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b522" }}></i>
                    </a>
                    <p className="project-description">
                        This app is powered by Firebase Authentication, Storage, and Firestore.
                        With this app the user can store their files on the cloud and access them
                        wherever they may need them.
                    </p>
                    <p className="project-description">
                        <span style={{ fontWeight: "700", fontSize: "22px" }}> Technologies: </span>
                        HTML, CSS, JavaScript, React, React-Bootstrap, and Bootstrap.
                    </p>
                </div>
            </div>
            <div className="my-5 row bg-transparent">
                <div className="offset-lg-1 col-lg-6 align-self-center">
                    <Image src={SpotifyLyrical} atl="Spotify Lyrical" fluid rounded />
                </div>
                <div className="col-lg-4 align-self-center">
                    <a className="project-titles mt-3"
                        href="https://spotify-lyrical.herokuapp.com/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        Spotify Lyrical
                        </a>
                    <a className="ml-2" href="https://github.com/tiroxxx/spotify-clone" target="_blank">
                        <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b522" }}></i>
                    </a>
                    <p className="project-description">
                        Powered by the Spotify API, with Spotify Lyrical you can get the lyrics for
                        the songs you know and love using your spotify account.
                    </p>
                    <p className="project-description">
                        <span style={{ fontWeight: "700", fontSize: "22px" }}> Technologies include </span>
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
                    <a className="project-titles mt-3"
                        href="https://whispering-cove-53195.herokuapp.com/loggedin"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        Bookmark
                        </a>
                    <a className="ml-2" href="https://github.com/brigil/Bookmark" target="_blank">
                        <i className="fab fa-github-square" style={{ fontSize: "2.5rem", color: "#f1b522" }}></i>
                    </a>
                    <p className="project-description">
                        With Bookmark you can search for books inside our database,
                        learn about the book you selected with the synopsis,
                        or even select books from the recommended section.
                    </p>
                    <p className="project-description">
                        <span style={{ fontWeight: "700", fontSize: "22px" }}> Technologies include </span> HTML, CSS, JavaScript, jQuery, MySQL, Sequelize, Express, and the Bulma framework.
                    </p>
                </div>
            </div>
        </div>
    )
}
