import axios from '~/utils/customizeAxios';
import requests from '~/utils/requests';

export const topRatedService = async () => {
    try {
        const res = await axios.get(requests.fetchTopRated);
        if (res && res.results?.length > 0) {
            const results = res.results;
            return results;
        }

        return;
    } catch (error) {
        console.log(error);
    }
};

export const getGenresMovieList = async () => {
    try {
        const res = await axios.get(requests.getGenresMovieList);
        if (res && res.genres?.length > 0) {
            const results = res.genres;
            return results;
        }
    } catch (error) {
        console.log(error);
    }
};

export const getMovieByGenres = (genres, page = 1) => {
    try {
        return axios.get(`${requests.getMovieListByGenres}${genres}&page=${page}`);
    } catch (error) {
        console.log(error);
    }
};

export const moviesPopularService = async (page = '1', sort = '') => {
    try {
        const res = await axios.get(requests.fetchMoviePopular, {
            params: {
                page,
            },
        });
        // if(res && res.results?.length > 0) {
        //     switch(sort) {
        //         case 'popularity-desc':
        //             const result = res.results

        //             break;
        //         default:
        //             return res.results
        //     }

        // }
        return res?.results;
    } catch (error) {
        console.log(error);
    }
};

export const moviesNowPlayingService = async (page = '1') => {
    try {
        const res = await axios.get(requests.fetchMovieNowPlaying, {
            params: {
                page,
            },
        });
        return res?.results;
    } catch (error) {
        console.log(error);
    }
};

export const moviesUpcomingService = async (page = '1') => {
    try {
        const res = await axios.get(requests.fetchMovieUpcoming, {
            params: {
                page,
            },
        });
        return res?.results;
    } catch (error) {
        console.log(error);
    }
};

export const moviesTopRatedService = async (page = '1') => {
    try {
        const res = await axios.get(requests.fetchMovieTopRated, {
            params: {
                page,
            },
        });
        return res?.results;
    } catch (error) {
        console.log(error);
    }
};
