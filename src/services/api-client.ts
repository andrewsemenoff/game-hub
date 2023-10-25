import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'cf9c60d4d0fe4fb8a0d0d64facd72f12'
    }
})
export default apiClient;