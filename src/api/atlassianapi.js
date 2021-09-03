import { api } from './AxiosCacheAdapter';
import axios from "axios";

const BASE_URL = 'https://jotformgamification.atlassian.net';
const EMAIL = 'uygurugurlu@gmail.com';
const TOKEN = 'y803xJzM0W1KKvgMV9ht8F64';
export const getJiraTasks = async () => await axios.get(`${BASE_URL}/rest/api/3/search`, {
        auth: {
            username: EMAIL,
            password: TOKEN
        },
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
