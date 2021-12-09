import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -pQ8DqPiyySeDjO4bYL2CE9ujaBkygr-mTQCTK8cTzE'
    }
})