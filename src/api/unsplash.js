import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID P54uwQRdi58o6AnkUsgc_bIhL0FXHJK9jt10s9FN8m0'
    }
});