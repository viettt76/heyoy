const API_KEY = process.env.REACT_APP_API_KEY;
const language = 'vi-VN';

const apis = {
    fetchTrending: `/trending/movie/day?api_key=${API_KEY}&language=${language}`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=${language}`

    // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${language}`,

    // fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    // fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    // fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    // fetchTVAction: `discover/tv?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&with_genres=10759`,
    // fetchTVComedy: `discover/tv?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&with_genres=35`,
    // fetchTVAnimation: `discover/tv?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&with_genres=16`,
    // fetchTVMystery: `discover/tv?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&with_genres=9648`,


    // fetchMoviesGenres: `/genre/movie/list?api_key=${API_KEY}&language=${language}`,
    // fetchTVShowGenres: `/genre/tv/list?api_key=${API_KEY}&language=${language}`,
    // fetchTVLatest: `/tv/latest?api_key=${API_KEY}&language=${language}`,
}

export default apis