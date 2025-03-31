import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://techhk.aoscdn.com",
});

export default axiosInstance;
