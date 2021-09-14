import React, { Component } from 'react'

export default class NewsItem extends Component {


    render() {
        const {title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
        const date = new Date(publishedAt).toGMTString()
        console.log(date)
        return (
            <div className="card" style={{marginTop: 20}}>
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-secondary" style={{left: "87%", zIndex:20}}>
                    {source}
                </span>
                <img src={imageUrl? imageUrl: 'https://static9.depositphotos.com/1011646/1236/i/600/depositphotos_12369509-stock-photo-breaking-news-screen.jpg'} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">Author: {author? author: "Unknown"}, Time: {date}</small></p>
                    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}
