import axios from "axios";
import UserApi from "./userApi";
import storage from "../storage";
import _ from "lodash";

const BASEURL = "https://igaurav.co.in/main/api";

class API {
    __user = new UserApi();
    api = axios.create({
        baseURL: BASEURL,
        transformRequest: [(data) => JSON.stringify(data)],
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    get user() {
        return this.__user;
    }

    get(url, ...args) {
        return this.sendRequestInternal(this.api.get, url, ...args);
    }

    post(url, ...args) {
        return this.sendRequestInternal(this.api.post, url, ...args);
    }

    patch(url, ...args) {
        return this.sendRequestInternal(this.api.patch, url, ...args);
    }

    sendRequestInternal(requestFunc, url, ...args) {
        const token = storage.get("token");
        // if (token) {
        //     this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // }
        return requestFunc(url, ...args)
            .then((response) => response)
            .catch((error) => {
                if (error.response) {
                    if (_.get(error, ["response", "data", "status"], 500) === 401) {
                        storage.clearAll();
                        window.location = "/";
                    }
                }
                throw error;
            });
    }
}

export default new API();