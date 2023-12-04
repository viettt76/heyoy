import axios from '~/utils/customizeAxios';
import requests from '~/utils/requests';

const searchService = async (query, page = '1') => {
    if (query) {
        const res = await axios.get(requests.fetchSearch, {
            params: {
                query,
                page,
            },
        });
        if (res && res.results?.length > 0) {
            return res;
        }

        return;
    } else {
        const res = await axios.get(requests.fetchTrending, {
            params: {
                query: '',
                page,
            },
        });

        if (res && res.results?.length > 0) {
            return res;
        }
    }
};

export default searchService;
