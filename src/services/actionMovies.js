import request from "~/utils/httpRequest";
import apis from "~/utils/apis";

const actionMovies = async () => {
    try {
        const res = await request.get(apis.fetchActionMovies)
        console.log(res);
        if(res && res.data && res.data.results.length > 0) {
            const results = res.data.results
            return results
        }
    } catch (error) {
        console.log(error);
    }
}

export default actionMovies