import axios from '~/utils/customizeAxios';
import requests from '~/utils/requests';

const searchService = (query, page = '1') => {
    return axios.get(requests.fetchSearchMulti, {
        params: {
            query,
            page,
        },
    });
};

export default searchService;
