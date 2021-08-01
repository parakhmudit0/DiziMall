import api from "./api";

export default class AuthAPI {
    getDetail() {
        return api.get("/menu/get_user");
    }
}