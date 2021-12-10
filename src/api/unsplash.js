import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID K2NNfQZQYGr5Xl2MG1U74fyyYJGXA-zDR_TyZJLR4zo'
    }
})

//axios.create creates an instance of axios client w some default properties.