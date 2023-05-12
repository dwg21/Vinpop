import axios from 'axios'; 

axios.defaults.withCredentials = true
// baseURL:'http://localhost:5000/'

const ServerApi = axios.create({
    baseURL:'http://www.server.vinswap.lat',
    withCredentials: true,

})

export default ServerApi
