import { api } from './AxiosCacheAdapter';

const API_KEY = 'b7e0e27ca4cf3e5803f6e5989c815419';
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

export const loginUser = async (username, password) => await api.post(`${BASE_URL}${apiEndpoints.login}?username=${username}&password=${password}`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },

});

export const logoutUser = async () => await api.get(`${BASE_URL}${apiEndpoints.logout}`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getFormDetail  = async (id) => await api.get(`${BASE_URL}${apiEndpoints.form}/${id}`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    params: {
        apiKey: API_KEY,

    }
});

export const getFormQuestions  = async (id) => await api.get(`${BASE_URL}${apiEndpoints.form}/${id}/questions`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    params: {
        apiKey: API_KEY,
        id: id

    }
});

export const submitForm  = async (id, ) => await api.post(`${BASE_URL}${apiEndpoints.form}/${id}/submissions?apiKey=${API_KEY}&submission[3]:"uygurugurlu@gmail.com"&submission[4_first]:"uygur"`);


