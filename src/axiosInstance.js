import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.wazirx.com/api/v2",
});

export default axiosInstance;
