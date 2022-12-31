import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const PortalNavBar = () => {
    const expand = false;

    return (
        <Navbar bg="light" expand={expand} fixed="top">
            <Container fluid>
                <Navbar.Brand href="https://treinarecife.com.br/">
                    <img
                        src={require("../assets/img/treina_recife_logo.png")}
                        width="155"
                        height="35"
                        className="d-inline-block align-top"
                        alt="treina_recife_logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <img
                                src={require("../assets/img/treina_recife_logo.png")}
                                width="155"
                                height="35"
                                className="d-inline-block align-top"
                                alt="treina_recife_logo"
                            />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/prospects">Prospects</Nav.Link>
                            <Nav.Link href="/turmas">Turmas</Nav.Link>
                            <Nav.Link href="/alunos">Alunos</Nav.Link>
                            <Nav.Link href="/cursos">Cursos</Nav.Link>
                            <Nav.Link href="/professores">Professores</Nav.Link>
                            <Nav.Link href="/sign-in">Sign In</Nav.Link>
                            <Nav.Link href="/sign-out">Sign Out</Nav.Link>
                            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                            <Nav.Link href="/perfil">Perfil</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default PortalNavBar;