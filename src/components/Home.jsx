import React, { Component } from 'react';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <Container>      
                    <Jumbotron>
                        <h1>Welcome to Movie Club</h1>
                        <p>Find your favourite movie quote and let it lead your inspiration..</p>
                        <Link to="/movies">
                            <Button bsstyle="btn btn-primary">See more movies</Button>
                        </Link>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="movie-wrapper">
                            <Image src="./assets/enola.jpg" className="movie-pic" />
                            <h3>Enola Holmes</h3>
                            <p>Enola Holmes is a 2020 mystery film based on the first book in the series of the same name by Nancy Springer. The story is about the teenage sister of the already-famous Sherlock Holmes, who goes to London in search of her mother who has disappeared.</p>
                        </Col>
                        <Col xs={12} sm={4} className="movie-wrapper">
                            <Image src="./assets/shawshank.jpg" className="movie-pic" />
                            <h3>The Shawshank Redemption</h3>
                            <p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins).</p>
                        </Col>
                        <Col xs={12} sm={4} className="movie-wrapper">
                            <Image src="./assets/forest.jpg" className="movie-pic" />
                            <h3>Forrest Gump</h3>
                            <p>Forrest Gump is a 1994 American epic romantic comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom and stars Tom Hanks, Robin Wright, Gary Sinise and Mykelti Williamson.</p>
                        </Col>
                    </Row>
                </Container>
            </div >

        )
    }
}
export default Home;