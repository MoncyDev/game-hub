import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

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
      },
      params: config.params,
    });
    return res.data;
  };
  get = async (id: number | string) => {
    const res = await axiosInstance.get<T>("/" + id, {
      headers: {
        endpoint: this.endpoint,
      },
    });
    return res.data;
  };
}
export default APIClient;
