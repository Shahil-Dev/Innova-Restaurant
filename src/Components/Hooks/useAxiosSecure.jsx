import axios from "axios";

// ✅ Dynamic base URL for both local & deployed
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

const useAxiosSecure = () => axiosSecure;

export default useAxiosSecure;
