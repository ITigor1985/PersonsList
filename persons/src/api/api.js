import axios from "axios";

export const getAll = async () => {
  axios.defaults.baseURL = `http://localhost:3000/`;
  const response = await axios.get("/api/people/");
  return response.data;
};

export const addPeople = async (item) => {
  try {
    const response = await axios.post("/api/people/", item);
    console.log("👉 Returned data:", response.ok);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

export const deletePeople = async (id) => {
  try {
    await axios.delete(`/api/people/${id}`);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

export const editPeople = async (id, item) => {
  try {
    await axios.put(`/api/people/${id}`, item);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};
