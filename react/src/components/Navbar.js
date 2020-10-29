import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export function NavigationBar() {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Trading & Jeux</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Challenge</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/morpion">Morpion</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/pendu">pendu</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}









