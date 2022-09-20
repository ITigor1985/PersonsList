import axios from "axios";

export const getAll = async () => {
  axios.defaults.baseURL = `http://localhost:3000/`;
  const response = await axios.get("/api/people/");
  return response.data;
};
