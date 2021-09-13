import React, { Component } from 'react'

// api
import {getApiUrl} from '../../api/APIEndpoints'

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
        console.log(this.props)
    }

    async componentDidMount(){
        this.setState({isLoading: true})
        const response = await fetch(getApiUrl(this.props.country, this.props.pageSize, this.props.category))
        console.log('genreted url', getApiUrl(this.props.country, this.props.pageSize, this.props.category)+`&page=${this.state.page + 1}`)
        const {articles, totalResults} = await response.json()

        this.setState({
            articles,
            totalPages: Math.ceil(totalResults/this.props.pageSize),
            isLoading: false
        })
    }
    handleNextClick = async () => {
        this.setState({isLoading: true})
        const response = await fetch(getApiUrl(this.props.country, this.props.pageSize, this.props.category)+`&page=${this.state.page + 1}`)
        const {articles} = await response.json()
        this.setState({
            articles,
            page: this.state.page + 1,
            isLoading: false
        })
        console.log('next')
    }
    handlePreviousClick = async () => {
        this.setState({isLoading: true})
        const response = await fetch(getApiUrl(this.props.country, this.props.pageSize, this.props.category)+`&page=${this.state.page - 1}`)
        const {articles} = await response.json()
        this.setState({
            articles,
            page: this.state.page - 1,
            isLoading: false
        })
        console.log('previous')
    }
    render() {
        return (
            <div className='container my-3' style={{paddingTop: 50}}>
                <h1 className='my-3 text-center'>World Bullatins | Top Headlines</h1>
                {this.state.isLoading &&<Spinner />}
                <div className='row my-3'>
                    {
                        !this.state.isLoading 
                        && 
                        this.state.articles.map((article) => (
                                <div key={article.url} className='col-md-4'>
                                    <NewsItem title={article.title} newsUrl={article.url} imageUrl={article.urlToImage}  description={article.description}/>                    
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
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}