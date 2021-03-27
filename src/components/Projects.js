import React from 'react'
import { Image } from 'react-bootstrap'
import Bookmark from "../images/Bookmark.PNG"
import SubAway from "../images/SubAway.PNG"
import wineDines from "../images/wine&dines.JPG"

export default function Projects() {
    return (
        <div className="container-fluid">
            <div className="text-center">
                <h2 style={{ color: "#f1b522" }}>
                    Projects
            </h2>
            </div>
            <div className="row bg-success">
                <div className="col-sm">
                    <Image src={SubAway} fluid rounded />
                </div>
                <div className="col-sm">
                    <a
                        href="https://subaway.herokuapp.com/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3>SubAway</h3>
                    </a>
                    <p>
                        SubAway is a Full Stack MEARN application where the user will enter their
                        subscriptions and they will be displayed in the order they are due.
                        This allows the user to cancel any subscriptions about to renew that
                        they no longer use. Technologies used include HTML, CSS, JavaScript,
                        React, MongoDB, Mongoose, Express, Auth0, RESTful APIs, MD Bootstrap and Bootstrap.
                    </p>
                    <a href="https://github.com/irasar/SubAway" target="_blank"><i class="fab fa-github-square" style={{ fontSize: "2rem" }}></i></a>
                </div>
            </div>
            <div className="row bg-success">
                <div className="col-sm">
                    <Image src={wineDines} fluid rounded />
                </div>
                <div className="col-sm">
                    <a
                        href="https://andrewrb22.github.io/-.theFederationOfCoders-/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3>Wine & Dines</h3>
                    </a>
                    <p>
                        With Wine & Dines the user can choose from four of the provided
                        proteins and a recipe will be randomly selected and be paired with
                        wines that compliment this dish. Technologies used include HTML,
                        CSS, JavaScript, jQuery, RESTful APIs and the Materialize framework.
                    </p>
                    <a href="https://github.com/andrewrb22/-.theFederationOfCoders-" target="_blank"><i class="fab fa-github-square" style={{ fontSize: "2rem" }}></i></a>
                </div>
            </div>
            <div className="row bg-success">
                <div className="col-sm">
                    <Image atl="cloud storage" fluid rounded />
                </div>
                <div className="col-sm">
                    <a
                        href="https://cloud-personal-storage.web.app/login"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3>Personal Cloud Storage</h3>
                    </a>
                    <p>
                        This app is powered by Firebase Authentication, Storage, and Firestore.
                        With this app the user can store their files on the cloud and access them
                        wherever they may need them. Technologies include HTML, CSS, JavaScript,
                        React, React-Bootstrap, and Bootstrap.
                    </p>
                    <a href="https://github.com/tiroxxx/CloudPersonalStorage" target="_blank"><i class="fab fa-github-square" style={{ fontSize: "2rem" }}></i></a>
                </div>
            </div>
            <div className="row bg-success">
                <div className="col-sm">
                    <Image atl="Spotify Lyrical" fluid rounded />
                </div>
                <div className="col-sm">
                    <a
                        href="https://spotify-lyrical.herokuapp.com/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3>Spotify Lyrical</h3>
                    </a>
                    <p>
                        Powered by the Spotify API, with Spotify Lyrical you can get the lyrics for
                        the songs you know and love using your spotify account. Technologies used
                        include HTML, CSS, JavaScript, React, Express, RESTful APIs, and the Bootstrap
                        framework.

                    </p>
                    <a href="https://github.com/tiroxxx/spotify-clone" target="_blank"><i class="fab fa-github-square" style={{ fontSize: "2rem" }}></i></a>
                </div>
            </div>
            <div className="row bg-success">
                <div className="col-sm">
                    <Image src={Bookmark} alt="Bookmark" fluid rounded />
                </div>
                <div className="col-sm">
                    <a
                        href="https://whispering-cove-53195.herokuapp.com/loggedin"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#f1b522" }}
                    >
                        <h3>Bookmark</h3>
                    </a>
                    <p>
                        With Bookmark you can search for books inside our database,
                        learn about the book you selected with the synopsis,
                        or even select books from the recommended section.
                        Technologies include HTML, CSS, JavaScript, jQuery, MySQL, Sequelize, Express, and the Bulma framework.
                    </p>
                    <a href="https://github.com/brigil/Bookmark" target="_blank"><i class="fab fa-github-square" style={{ fontSize: "2rem" }}></i></a>
                </div>
            </div>
        </div>
    )
}
