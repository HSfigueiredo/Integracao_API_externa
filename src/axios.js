const axios = require('axios');
require('dotenv').config();

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: process.env.API_KEY
    }
});

module.exports = instanciaAxios;