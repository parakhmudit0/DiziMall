import enumApi from './apis/enumApi';

class EnumService {
    getStates() {
        return enumApi.getStates();
    }
    getCities(state) {
        return enumApi.getCities(state);
    }
}
export default new EnumService();