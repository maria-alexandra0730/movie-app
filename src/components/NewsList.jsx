import React, { Component } from 'react';
import './NewsList.css';

class NewsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: "Oct. 25. 2020 11:44 AM",
            title: "Jamie Lee Curtis Sends Sweet Message To Arnold Schwarzenegger As He Recovers From Surgery",
            news: [
                {
                    author: "Katherine Webb",
                    paragraph: "Arnold Schwarzenegger has built an entire career on his ability to put up a good fight. Now, he’s facing a real-life fight with some pretty high stakes, as he recovers from his second heart surgery. Luckily, he seems to have a strong support system by his side, including friend and former co-star Jamie Lee Curtis, who sent him an encouraging “get well soon” message on social media.",
                }
            ]
        }
    }
    render() {
        const {
            date,
            title,
            news
        } = this.state;
        return (
            <React.Fragment>
                <section className="news-container">
                    <header className="news-header">
                        <span date={date}></span>
                        <h2>{title}</h2>
                    </header>
                    <main>
                        <ul>
                            {news.map((row, index) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            {row.author}
                                            {row.paragraph ? row.paragraph: 'n/a'} 
                                            </span>
                                        
                                    </li>
                                )
                            })}
                        </ul>
                    </main>
                </section>
            </React.Fragment>
        )
    }
}
export default NewsList;