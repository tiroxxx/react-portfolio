import React from 'react'
import { Nav, Navbar } from "react-bootstrap"
import Resume from "../images/Resume-2021.pdf"


export default function NavbarComponent() {
    return (
            <Navbar   bg="transparent" expand="sm" className="justify-content-end">
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact-me">Contact</Nav.Link>
                        <Nav.Link href="https://docs.google.com/document/d/1mhmS6JX3_NNkChotWAtlst8hFKwQpilhbxgTA-ro3Hk/edit?usp=sharing" rel="noreferrer noopener">Resume</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/christian-marquez-286a211b2/" target="_blank">linkedin</Nav.Link>
                        <Nav.Link href="https://github.com/tiroxxx" target="_blank">Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
