import React from 'react'

export default function ContactMe() {
    return (
        <div id="contact-me" className="container-fluid text-center pt-4">
            <h2 className="mb-5" style={{ fontFamily: "Times New Roman", fontSize: "2.4em" }}>Contact Me</h2>
            <p className="contact-me">
                Feel free to reach out if you will like to collab on a project! <br />
                        Or if you want to talk about Star Wars...
                    </p>
            <p className="contact-me">(352) 242-7902</p>
            <p className="contact-me">
                christianmarquez41@gmail.com
                <a
                    href="https://www.linkedin.com/in/christian-marquez-286a211b2/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                >
                    <i className="fab fa-linkedin ml-2" style={{ fontSize: "2.5rem", color: "white" }}></i>
                </a>
                <a
                    href="https://github.com/tiroxxx"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                >
                    <i className="fab fa-github-square ml-2" style={{ fontSize: "2.5rem", color: "white" }}></i>
                </a>
            </p>
        </div>
    )
}
