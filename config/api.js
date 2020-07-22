import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const domain = "http://localhost:4001";

const api = (url, data, method = 'GET') => fetch(domain + url, {
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