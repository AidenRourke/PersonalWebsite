import axios from "axios";


const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://whispering-tundra-82613.herokuapp.com' : 'http://localhost:8888';

const ApiService = {
    getTopTrack(timerange){
        return axios.get(`${BASE_URL}/top_track?time_range=${timerange}`)
    },

    startSSE() {
        return new EventSource(`${BASE_URL}/stream`)
    }
};

export default ApiService;

