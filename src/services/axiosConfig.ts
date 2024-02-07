import axios, { AxiosInstance } from "axios";

// Create an instance of axios with custom configuration
const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3005",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
