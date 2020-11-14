const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

const apiURL = {
    mostViewed:  baseURL + 'mostpopular/v2/viewed/1.json?' + API_KEY
}

export default apiURL;