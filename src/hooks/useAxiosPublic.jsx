import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://cp-shop.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
