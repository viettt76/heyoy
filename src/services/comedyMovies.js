import axios from '~/utils/customizeAxios';
import requests from '~/utils/requests';

const comedyMovies = async () => {
    try {
        const res = await axios.get(requests.fetchComedyMovies);
        if (res && res.results.length > 0) {
            const results = res.results;
            return results;
        }
    } catch (error) {
        console.log(error);
    }
};

export default comedyMovies;
