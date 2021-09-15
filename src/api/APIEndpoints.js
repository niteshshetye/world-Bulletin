import {API_KEY} from '../../keys'

export const newsApi = (pageNumber, pageSize, country,category) => {
    const TOP_HEADLINES = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${pageNumber}&pageSize=${pageSize}`
    return TOP_HEADLINES
}