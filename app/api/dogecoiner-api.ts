import axios from 'axios';

class DogeCoinerApi{
    baseUri: string;

    constructor() {
        this.baseUri = process.env.NEXT_PUBLIC_DOGECOINER_API;
    }

    getKlineHistory(symbol, interval) {
        const uri = `${this.baseUri}/klinehistory/?symbol=${symbol}&interval=${interval}`;
        return axios.get(uri);
    }

    getKlineHistoryLineData(symbol, interval) {
        const uri = `${this.baseUri}/klinehistory/linedata/?symbol=${symbol}&interval=${interval}`;
        return axios.get(uri);
    }
}

export const dogecoinerApi = new DogeCoinerApi();