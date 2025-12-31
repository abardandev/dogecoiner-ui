import 'server-only';

import axios, { AxiosInstance } from 'axios';
import https from 'https';

// this calls the dogecoiner-api served from its own domain
class DogeCoinerApiClient {
    baseUri: string | undefined;
    private axiosInstance: AxiosInstance;

    constructor() {
        this.baseUri = process.env.DOGECOINER_API;

        // Configure axios with HTTPS agent
        // In development, accept self-signed certificates
        // In production, enforce strict SSL validation
        this.axiosInstance = axios.create({
            httpsAgent: new https.Agent({
                rejectUnauthorized: process.env.NODE_ENV === 'production'
            })
        });
    }

    async getKlineHistory(symbol, interval) {
        const uri = `${this.baseUri}/klinehistory/?symbol=${symbol}&interval=${interval}`;
        return await this.axiosInstance.get(uri);
    }

    async getKlineHistoryLineData(symbol, interval) {
        const uri = `${this.baseUri}/klinehistory/linedata/?symbol=${symbol}&interval=${interval}`;
        return await this.axiosInstance.get(uri);
    }
}

export const dogecoinerApiClient = new DogeCoinerApiClient();