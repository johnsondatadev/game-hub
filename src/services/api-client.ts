import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '528d44f875ed4d40a385c16c68f34f0a'
    }
})