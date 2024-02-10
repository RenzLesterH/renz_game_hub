import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "dfdf157e370343fda5ac93e38885874c"
    }
}); 