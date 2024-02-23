import axios from "axios";
import { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "dfdf157e370343fda5ac93e38885874c"
    }
});

interface FetchResponse<T>{
    count: number;
    results: T[];
}

class APIClient<T> {
  endpoint: string;
  

  constructor(endpoint: string){
    this.endpoint = endpoint;
  }

  getAll = (requestConfig: AxiosRequestConfig) => {
    
    return axiosInstance
        .get<FetchResponse <T>>(this.endpoint, requestConfig)
        .then((res) => res.data.results);
  }

  get = (id: string | number) => {
    return axiosInstance
        .get<T>(this.endpoint + "/" + id)
        .then((res) => res.data);
  }

}

export default APIClient;