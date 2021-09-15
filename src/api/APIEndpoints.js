import {API_KEY} from '../../keys'
// export const method_get = {
//     "method": 'GET',
// 	"headers": {
//         "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
// 	    "x-rapidapi-key": "da6f326aecmsh169a45bfbb98bcdp1c6666jsnc281931fa72e"
//     }
// }

// export const anotherApi = (pageNumber, pageSize, country) => {
//     const TOP_HEADLINES = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=${pageNumber}&pageSize=${pageSize}&withThumbnails=false&location=${country}`
//     return TOP_HEADLINES
// }

export const newsApi = (pageNumber, pageSize, country,category) => {
    const TOP_HEADLINES = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${pageNumber}&pageSize=${pageSize}`
    return TOP_HEADLINES
}