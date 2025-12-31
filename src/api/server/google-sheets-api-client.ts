import 'server-only';

import path from 'node:path';
import process from 'node:process';
import { google } from 'googleapis';
import { LanguageServiceClient } from '@google-cloud/language';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const CRED_PATH = path.join(process.cwd(), 'credentials.json');

// keeps calls to google sheets on the server side
class GoogleSheetsApiClient {
    sheets;
    
    constructor() {
    }

    async listMajors() {
        const apiKey = process.env.GOOGLE_API_KEY;
        //const auth = new LanguageServiceClient({apiKey});

        this.sheets = google.sheets({version: 'v4', auth: apiKey});

        return await this.sheets.spreadsheets.values.get({
            spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
            range: 'Class Data!A2:E',
        });
    }
}

export const gApiClient = new GoogleSheetsApiClient();