import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a608e10ed1c840ce9966b5f319579241'
    }
})