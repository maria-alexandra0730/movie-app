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
                        <h2>Welcome to Movie Club</h2>
                        <p>Find your favourite movie quote and let it lead your inspiration..</p>
                        <Link to="/movies">
                            <Button bsstyle="btn btn-primary">See more movies</Button>
                        </Link>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="movie-wrapper">
                            <Image src="./assets/enola.jpg" className="movie-pic" />
                            <h3>Enola Holmes</h3>
                            {/* <p>Courchevel is the largest and most famous of the several interlinked ski resorts known as Les Trois Vallées (Three Valleys), which form the largest ski domain in Europe. In addition to the 150 kilometers of alpine runs you can reach from Courchevel's own 60 lifts, these link into access to a total of 600 kilometers of interconnected ski runs, plus four glaciers. The entire area is spread across 10 summits, with altitudes above 2,500 meters. </p> */}
                            <Link to="/movies">
                                <Button bsstyle="btn btn-secondary">See more movies</Button>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4} className="movie-wrapper">
                            <Image src="./assets/enola.jpg" className="movie-pic" />
                            <h3>Enola Holmes</h3>
                            {/* <p>Courchevel is the largest and most famous of the several interlinked ski resorts known as Les Trois Vallées (Three Valleys), which form the largest ski domain in Europe. In addition to the 150 kilometers of alpine runs you can reach from Courchevel's own 60 lifts, these link into access to a total of 600 kilometers of interconnected ski runs, plus four glaciers. The entire area is spread across 10 summits, with altitudes above 2,500 meters. </p> */}
                            <Link to="/movies">
                                <Button bsstyle="btn btn-secondary">See more movies</Button>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4} className="movie-wrapper">
                            <Image src="./assets/enola.jpg" className="movie-pic" />
                            <h3>Enola Holmes</h3>
                            {/* <p>Courchevel is the largest and most famous of the several interlinked ski resorts known as Les Trois Vallées (Three Valleys), which form the largest ski domain in Europe. In addition to the 150 kilometers of alpine runs you can reach from Courchevel's own 60 lifts, these link into access to a total of 600 kilometers of interconnected ski runs, plus four glaciers. The entire area is spread across 10 summits, with altitudes above 2,500 meters. </p> */}
                            <Link to="/movies">
                                <Button bsstyle="btn btn-secondary">See more movies</Button>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4} className="movie-wrapper">
                            <Image src="./assets/shawshank.jpg" className="movie-pic" />
                            <h3>The Shawshank Redemption</h3>
                            {/* <p>With Switzerland's greatest vertical drop and skiable terrain at altitudes as high as 3,900 meters, the highest winter sports area in the Alps has a lot more going for it than just a pretty face. But having the iconic landmark of the Matterhorn as a backdrop puts Zermatt and the mountainsides behind it on the top of most skiers' wish lists. Not only does the Matterhorn give the town the most scenic setting of any in Europe, its distinctive profile is visible from much of the 350-kilometer trail system connected to Zermatt.</p> */}
                            <Link to="/movies">
                                <Button bsstyle="btn btn-secondary">See more movies</Button>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4} className="movie-wrapper">
                            <Image src="./assets/forest.jpg" className="movie-pic" />
                            <h3>Forrest Gump</h3>
                            {/* <p>Sharing a high valley surrounded by 3,000-meter peaks, Val d'Isère and neighboring Tignes offer 300 kilometers of skiable terrain served by more than 150 ski lifts. This comprises the vast Espace Killy, named for Olympic triple gold medal winner Jean-Claude Killy, a native of Val d'Isère. The lowest terrain is at an altitude of 1,550 meters, and the highest reaches to 3,450 meters, which helps keep the season open into May. You can usually be sure of skiing on the Glacier du Pisaillas into June or July.</p> */}
                            <Link to="/movies">
                                <Button bsstyle="btn btn-secondary">See more movies</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}
export default Home;