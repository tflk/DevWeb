import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Image from '../assets/PacmanGif2.gif';

const Styles = styled.div`
    .jumbo {
        background: url(${Image}) no-repeat center;
        background-size: cover;
        background-color: black;
        font-weight: bold;
        color: white;
        text-shadow: 0 0 3px black;
        height: 200px;
        position: relative;
        z-index: -2;
    }
`;

export function Jumbotron() {
    return(
        <Styles>
            <Jumbo fluid className="jumbo">
                <Container>
                    <h1>Bienvenue !</h1>
                    <p>Gagne le jeu pour passer au jeu suivant !</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}


