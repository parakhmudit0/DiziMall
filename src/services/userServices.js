import api from "./apis/api";

class UserService {
    getDetail() {
        return api.user.getUser();
    }
}

export default new UserService();