import axios from '~/utils/customizeAxios';
import requests from '~/utils/requests';

const actionMovies = async () => {
    try {
        const res = await axios.get(requests.fetchActionMovies);
        if (res && res.results.length > 0) {
            const results = res.results;
            return results;
        }
    } catch (error) {
        console.log(error);
    }
};

export default actionMovies;
