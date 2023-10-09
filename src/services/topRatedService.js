import axios from '~/utils/customizeAxios';
import requests from '~/utils/requests';

const topRated = async () => {
    try {
        const res = await axios.get(requests.fetchTopRated);
        if (res && res.results.length > 0) {
            const results = res.results;
            return results;
        }

        return;
    } catch (error) {
        console.log(error);
    }
};

export default topRated;
