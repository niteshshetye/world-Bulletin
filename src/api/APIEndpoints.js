export const API_KEY = '92f7dba4625b49d2b21a3c59ee7ccd51'

export const getApiUrl = (country,pageSize,category) => {
    const TOP_HEADLINES = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&pageSize=${pageSize}`
    return TOP_HEADLINES;
}

