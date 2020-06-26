import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const api = (url, data, method = 'GET') => fetch(url, {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Authentication': cookies.get('admin-atlanta')
    }
})

export default api;