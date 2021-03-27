import React from 'react'

export default function Footer() {
    return (
        <div className="row text-center">
            <div className="col-sm">
                <h3>Christian Marquez</h3>
            </div>
            <div className="col-sm">
                <h3>Contact Me</h3>
                <p>(352) 242-7902</p>
                <p>christianmarquez41@gmail.com</p>
                <a
                    href="https://www.linkedin.com/in/christian-marquez-286a211b2/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                >
                    LinkedIn
                </a>
            </div>
        </div>
    )
}
