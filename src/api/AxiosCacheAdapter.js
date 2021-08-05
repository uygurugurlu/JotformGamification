// Create `axios-cache-adapter` instance
import {setupCache} from 'axios-cache-adapter';
import axios from 'axios';

const cache = setupCache({
    maxAge: 60 * 60 * 1000,
});

// Create `axios` instance passing the newly created `cache.adapter`
export const api = axios.create({
    adapter: cache.adapter,
});
