import axios from "axios";

class enumAPI {
    
    getStates() {
        return axios.post(
            'https://countriesnow.space/api/v0.1/countries/states',
            {
                "country":"india"
            })
    }

    getCities(state) {
        return axios.post(
            'https://countriesnow.space/api/v0.1/countries/state/cities',
            {
                "country":"india",
                "state":state
            }
        )
    }
}

export default new enumAPI();
