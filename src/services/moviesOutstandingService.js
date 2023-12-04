import axios from '~/utils/customizeAxios';
import request from '~/utils/requests';

export const moviesPopularService = async (page = '1', sort = '') => {
    try {
        const res = await axios.get(request.fetchMoviePopular, {
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
        const res = await axios.get(request.fetchMovieNowPlaying, {
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
        const res = await axios.get(request.fetchMovieUpcoming, {
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
        const res = await axios.get(request.fetchMovieTopRated, {
            params: {
                page,
            },
        });
        return res?.results;
    } catch (error) {
        console.log(error);
    }
};
