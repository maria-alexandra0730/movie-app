import React, { Component } from 'react';
import NewsList from './NewsList';

class News extends Component {
    render() {

        return (
            <div>
                <NewsList />
                <NewsList />
            </div>
        )
    }
}
export default News;