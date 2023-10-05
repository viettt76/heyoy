import request from '~/utils/httpRequest';
import apis from '~/utils/apis';

const topRated = async () => {
    try {
        const res = await request.get(apis.fetchTopRated);

        if (res && res.data && res.data.results.length > 0) {
            const results = res.data.results;
            return results;
        }

        return;
    } catch (error) {
        console.log(error);
    }
};

export default topRated;
