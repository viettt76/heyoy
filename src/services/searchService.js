import request from '~/utils/httpRequest';
import apis from '~/utils/apis';

const search = async ({ debounceValue }) => {

    if (debounceValue) {
        const res = await request.get(apis.fetchSearch, {
            params: {
                query: debounceValue,
            },
        });

        if(res && res.data && res.data.results.length > 0) {
            const result = res.data.results.slice(0, 10);
            return result;
        }

        return;
    } else {
        const res = await request.get(apis.fetchTrending, {});

        if(res && res.data && res.data.results.length > 0) {
            const result = res.data.results.slice(0, 10);
            return result;
        }
    }
};

export default search;
