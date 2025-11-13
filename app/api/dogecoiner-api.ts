import axios from 'axios';
import { ChartState } from '../types/ChartState';

class DogeCoinerApi{
    baseUri: string;

    constructor() {
        this.baseUri = process.env.NEXT_PUBLIC_DOGECOINER_API;
    }

    getKlineHistory(symbol, interval) {
        const uri = `${this.baseUri}/klinehistory/?symbol=${symbol}&interval=${interval}`;
        return axios.get(uri);
    }

    async getKlineHistoryLineData(symbol, interval, state: ChartState) {
        const uri = `${this.baseUri}/klinehistory/linedata/?symbol=${symbol}&interval=${interval}`;
        return await axios.get(uri)
            .then(r => {
                // console.log(r.data);
                state.setData(r.data);
                state.setLoading(false);
            })
            .catch(e => {
                // console.log(e.message);
                state.setData([]);
                state.setError(e.message);
                state.setLoading(false);
            });
    }
}

export const dogecoinerApi = new DogeCoinerApi();