import axios from "axios";
import UserApi from "./userApi";
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
        return requestFunc(url, ...args)
            .then((response) => response)
            .catch((error) => {
                if (error.response) {
                    if (_.get(error, ["response", "data", "status"], 500) === 401) {
                        window.location = "/";
                    }
                }
                throw error;
            });
    }
}

export default new API();