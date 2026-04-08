// backend base url
const BASE_URL = 'http://localhost:5000';

// simple fetch wrapper that attaches the auth header
async function fetchWithAuth(url, options = {}) {
    const token = localStorage.getItem('token');

    if (!options.headers) {
        options.headers = {};
    }
    options.headers['Authorization'] = `Bearer ${token}`;
    options.headers['Content-Type'] = 'application/json';

    const res = await fetch(url, options);
    // if unauthorized, kick back to login
    if (res.status === 401) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
    return res;
}

// quick helper to get role from stored token
function getUserRole() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role || null;
    } catch (e) {
        return null;
    }
}

// logout helper
function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}
