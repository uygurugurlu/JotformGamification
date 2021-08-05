import { api } from './AxiosCacheAdapter';

const API_KEY = '81eeebd9e6489b14c480d0ab7768ceb6';
const BASE_URL = 'https://api.jotform.com';
const apiEndpoints = {
    forms: '/user/forms',
    login: '/user/login',
    logout: '/user/logout',
    form: '/form',
    submit: '',


}

export const getUserForms = async () => await api.get(`${BASE_URL}${apiEndpoints.forms}`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    params: {
        apikey: API_KEY
    }
});

export const loginUser = async (username, password) => await api.get(`${BASE_URL}${apiEndpoints.login}`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    params: {
        username: username,
        password: password,
    }
});

export const logoutUser = async () => await api.get(`${BASE_URL}${apiEndpoints.logout}`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getFormDetail  = async () => await api.get(`${BASE_URL}${apiEndpoints.form}`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    params: {
        apiKey: API_KEY,

    }
});

