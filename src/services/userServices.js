import api from "./apis/api";

class UserService {
    getDetail() {
        return api.user.getUser();
    }
    getAllClient() {
        return api.user.getAllClient();
    }
    sendConatct(data) {
        return api.user.sendContact(data);
    }
}

export default new UserService();