import axios, { AxiosError } from "axios";

export type ApiError = {
  message: string;
  status?: number;
  details?: unknown;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const normalized: ApiError = {
      message:
        (error.response?.data as { message?: string })?.message ||
        error.message ||
        "Request failed",
      status: error.response?.status,
      details: error.response?.data,
    };
    return Promise.reject(normalized);
  }
);

export default api;

