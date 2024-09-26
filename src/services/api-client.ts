import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const jwt = import.meta.env.VITE_GHUB_JWT;

const axiosInstance = axios.create({
  baseURL: "/api/gamehub",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>("/", {
      headers: {
        endpoint: this.endpoint,
        Authorization: jwt,
      },
      params: config.params,
    });
    return res.data;
  };
  get = async (id: number | string) => {
    const res = await axiosInstance.get<T>("/" + id, {
      headers: {
        endpoint: this.endpoint,
        Authorization: jwt,
      },
    });
    return res.data;
  };
}
export default APIClient;
