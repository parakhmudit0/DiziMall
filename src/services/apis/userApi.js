import api from "./api";
import axios from 'axios';

export default class UserAPI {
    getUser() {
        return api.get("/menu/get_user");
    }
    getAllClient() {
        return axios.get('https://igaurav.co.in/apnadizimall/api/our_clients.php')
    }
    sendContact(data) {
        return axios.post(' https://igaurav.co.in/apnadizimall/api/contactus.php',data)
    }
}