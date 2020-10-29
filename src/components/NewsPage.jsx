import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './NewsPage.css';

class NewsList extends Component {
    render() {
        return (
            <div>
                {/* <Image src="assets/red_popcorn.jpg" className="header-image"/> */}
                
                <Container>
                <h2>News </h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <h5>Could Wonder Woman 1984 Be Delayed Again? Here’s The Latest From Warner Bros..</h5>
                            <p>The past few months have obviously been unprecedented times, and had a major affect on the entertainment industry. Countless movies have been pushed back as a result, including Patty Jenkins' Wonder Woman 1984. The long awaited blockbuster is currently set to arrive Christmas Day, but fans have been wondering if those plans might change. And now one Warner Bros. exec was given an update..</p>
                            <p>Wonder Woman 1984 has had a long gestation process, as it was delayed a number of times before theaters around the world were shut down. Fans are eager to catch up with Gal Gadot's title character, as well as meet newcomers like Kristen Wiig's Cheetah.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/wonder_woman.jpg" />
                            <p>Author: COREY CHICHIZOLA</p>
                            <p>PUBLISHED: OCT. 28. 2020 7:42 AM</p>
                        </Col>
                        <Col xs={12} sm={8} className="main-section">
                            <h5>Angelina Jolie Shakes Up Her Team As Custody Lawsuit With Brad Pitt Keeps Going And Going And Going</h5>
                            <p>Being famous is a double edged sword, as the opportunities provided can also put your personal life in the public eye. Angelia Jolie and Brad Pitt know this all too well, as their relationships made headlines years before they eventually became a couple. The two actors have been in the midst of a very public divorce for years, with new updates constantly coming from their time in court. This has only continued this month, as there's been a shakeup in Jolie's legal team.</p>
                            <p>The divorce proceedings for Angelina Jolie and Brad Pitt have heated up recently, as the two actors compete for custody of their children. And while both sides have been battling over where the kids will be during the holidays, one member of Jolie's legal team has seemingly departed. Namely, Priya Sopori who works alongside Jolie's lawyer Samantha DeJean.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/angelina.jpg" />
                            <p>Author: COREY CHICHIZOLA</p>
                            <p>PUBLISHED: OCT. 28. 2020 10:42 AM</p>
                        </Col>
                        <Col xs={12} sm={8} className="main-section">
                            <h5>Mahershala Ali Explains His ‘Connection’ To Original Blade Actor Wesley Snipes</h5>
                            <p>Whether you’re an Academy Award winner or a highly regarded actor who feels overdue for such recognition, some arts performers just seem on the way to new success. Next up, two-time Oscar recipient Mahershala Ali is going to follow the iconic Wesley Snipes’ footsteps as the new face of Marvel’s slick Black superhero, Blade. What makes this casting choice all the more awesome is that Ali has always felt a sort of connection to Snipes, as folks he went to school with couldn’t help but see a resemblance.</p>
                            <p>The joking nature of Mahershala Ali’s classmates saw the actor, famous for award-winning performances in Moonlight and Green Book, landing quite a few nicknames related to other Wesley Snipes characters. As an example, Ali mentioned how some of his friends would call him “Shadow,” taken from Snipes’ character in director Spike Lee’s film Mo’ Better Blues. So that connection actually laid the groundwork to inspire him to take the next step in securing a role he was ready to own.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/ali.jpg" />
                            <p>Author: MIKE REYES</p>
                            <p>PUBLISHED: OCT. 27. 2020 9:55 AM</p>
                        </Col>
                        <Col xs={12} sm={8} className="main-section">
                            <h5>The Touching Reason Netflix’s Over The Moon Is About Moving On After Loss</h5>
                            <p>Lots of movies tell stories of loss, or about the people left behind after a loved one is gone, as they try to cope with that loss. However, Netflix's new animated feature Over the Moon, directed by Disney veteran Glen Keane, may have a more tangible connection to those themes than any movie of its kind, ever. The movie was written by a woman who knew she herself would very likely not live to see the film completed, and wanted to leave the story behind for her family.</p>
                            <p>Over the Moon was written by Audrey Wells, the screenwriter of The Hate U Give, after she had been diagnosed with cancer. Wells knew she would not see the finished product on the screen, and so, according to director Glen Keane, she specifically wrote Over the Moon, a story about loss and moving on, so that her family would have that final message from her. As Keane tells EW...</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/moon.jpg" />
                            <p>Author: DIRK LIBBEY</p>
                            <p>PUBLISHED: OCT. 27. 2020 7:18 AM</p>
                        </Col>
                        <Col xs={12} sm={8} className="main-section">
                            <h5>The Borat 2 Country Concert Had A Violent Ending That Wasn’t Shown</h5>
                            <p>You could make an entire movie from leftover scenes that didn’t make it into Borat Subsequent Moviefilm. Even if you stopped to think about the number of interviews Sacha Baron Cohen must do in character that don’t turn out well, he must have hours of deleted scenes that were meant for the movie, but didn’t meet the standard he needed for the finished cut. And then there are some scenes that end abruptly, and we as the audience have to be wondering, “How the hell did Cohen get out of that jam?”</p>
                            <p>Sacha Baron Cohen went on to explain that he knows for sure one member of the country audience reached for a gun that he had, and that Cohen’s security guard stopped him by whispering, “It’s not worth it, man.” As if to prove how disruptive “Country Steve’s” appearance was, Cohen brought footage to Stephen Colbert’s show, and around the seven-minute mark, you can see how the actor and satirist had to barricade himself in his trailer as the angry, manipulated crowd tried to power their way in.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/borat.jpg" />
                            <p>Author: SEAN O'CONNELL</p>
                            <p>PUBLISHED: OCT. 27. 2020 5:53 AM</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default NewsList;