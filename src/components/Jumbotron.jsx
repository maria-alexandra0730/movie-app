import React from 'react';
import {
    Jumbotron as Jumbo,
    Container,
    Button
}
    from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Jumbotron.css';

const Jumbotron = () => (
    <div>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome to Movies Club</h1>
                <p>write something here</p>
            </Container>
            <Link to="/movies">
                <Button bsstyle="primary">More movies</Button>
            </Link>
        </Jumbo>
    </div>
)
export default Jumbotron;
