import request from '~/utils/httpRequest';
import apis from '~/utils/apis';

const search = async ({ debounceValue }) => {

    if (debounceValue) {
        const res = await request.get(apis.fetchSearch, {
            params: {
                query: debounceValue,
            },
        });

        const result = res.data.results.slice(0, 10);
        return result;
    } else {
        const res = await request.get(apis.fetchTrending, {});
        const result = res.data.results.slice(0, 10);
        
        return result;
    }
};

export default search;
