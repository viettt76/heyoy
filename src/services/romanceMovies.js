import request from "~/utils/httpRequest";
import apis from "~/utils/apis";

const romanceMovies = async () => {
    try {
        const res = await request.get(apis.fetchRomanceMovies)
        console.log(res);
        if(res && res.data && res.data.results.length > 0) {
            const results = res.data.results
            return results
        }
    } catch (error) {
        console.log(error);
    }
}

export default romanceMovies