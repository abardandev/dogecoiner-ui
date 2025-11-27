import axios from 'axios';

// this calls the local server api
class DogeCoinerSsrApi {
    constructor() {
    }

    async getMajors() {
        const uri = 'api/majors';
        return await axios.get(uri);
    }
}

export const dogecoinerSsrApi = new DogeCoinerSsrApi();