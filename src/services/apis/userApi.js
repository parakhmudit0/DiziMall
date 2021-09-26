import api from "./api";

export default class UserAPI {
    getUser() {
        return api.get("/menu/get_user");
    }
}