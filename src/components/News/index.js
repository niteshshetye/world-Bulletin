import React, { Component } from 'react'

// api
import { newsApi } from '../../api/APIEndpoints'

// components
import NewsItem from './NewsItem'
import Spinner from '../Spinner/index'

import PropTypes from 'prop-types'



export default class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            isLoading: false,
            totalPages: 0,
        }
    }
    getNews = async (newPage) => {
        this.setState({
            isLoading: true
        })
        const responce = await fetch(newsApi(newPage,this.props.pageSize, this.props.country, this.props.category))
        const data = await responce.json()
        // console.log(data)
        this.setState({
            isLoading: false,
            articles: data.articles,
            totalPages: Math.ceil(data.totalResults/this.props.pageSize)
        })
    }

    componentDidMount(){
        this.getNews(this.state.page)    
        document.title = `World Bulletins | ${this.capitalizeFirstLetter(this.props.category)}`
    }

    handleNextClick = async () => {
        const newPage = this.state.page + 1
        this.setState({page: newPage})
        this.getNews(newPage)
    }
    handlePreviousClick = async () => {
        const oldPage = this.state.page - 1
        this.setState({page: this.state.page - 1})
        this.getNews(oldPage)
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <div className='container my-3' style={{paddingTop: 50}}>
                <h1 className='my-3 text-center'>World Bullatins | {this.capitalizeFirstLetter(this.props.category)}</h1>
                {this.state.isLoading &&<Spinner />}
                <div className='row my-3'>
                    {
                        !this.state.isLoading 
                        && 
                        this.state.articles.map((article) => (
                                <div key={article.url} className='col-md-4'>
                                    <NewsItem title={article.title} newsUrl={article.url} imageUrl={article.urlToImage}  description={article.description} author={article.author} publishedAt={article.publishedAt} source={article.source.name} />                    
                                </div>
                            )
                        )
                    }
                </div>
                <div className="d-flex justify-content-between">
                    <button 
                        type="button" 
                        className="btn btn-dark" 
                        onClick={this.handlePreviousClick}
                        disabled={this.state.page<=1}
                    >
                        &larr; Previous
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-dark" 
                        onClick={this.handleNextClick}
                        disabled={this.state.totalPages <= this.state.page}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        )
    }
}



News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}