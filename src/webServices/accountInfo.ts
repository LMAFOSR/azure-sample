require('dotenv').config();

export interface AccountInfo {
    accountNumber: string;
    accountSecret: string;
    locale: {
        country: 'US',
        language: 'en'
    }
}

export default {
    accountNumber: process.env.ACCOUNTNUMBER,
    accountSecret: process.env.ACCOUNTSECRET,
    locale: {
        country: 'US',
        language: 'en'
    }
}