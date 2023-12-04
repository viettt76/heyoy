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

export const actionMoviesService = async () => {
    try {
        const res = await axios.get(requests.fetchActionMovies);
        if (res && res.results?.length > 0) {
            const results = res.results;
            return results;
        }
    } catch (error) {
        console.log(error);
    }
};

export const comedyMoviesService = async () => {
    try {
        const res = await axios.get(requests.fetchComedyMovies);
        if (res && res.results?.length > 0) {
            const results = res.results;
            return results;
        }
    } catch (error) {
        console.log(error);
    }
};

export const documentariesService = async () => {
    try {
        const res = await axios.get(requests.fetchDocumentaries);
        if (res && res.results?.length > 0) {
            const results = res.results;
            return results;
        }
    } catch (error) {
        console.log(error);
    }
};

export const horrorMoviesService = async () => {
    try {
        const res = await axios.get(requests.fetchHorrorMovies);
        if (res && res.results?.length > 0) {
            const results = res.results;
            return results;
        }
    } catch (error) {
        console.log(error);
    }
};

export const romanceMoviesService = async () => {
    try {
        const res = await axios.get(requests.fetchRomanceMovies);
        if (res && res.results?.length > 0) {
            const results = res.results;
            return results;
        }
    } catch (error) {
        console.log(error);
    }
};
