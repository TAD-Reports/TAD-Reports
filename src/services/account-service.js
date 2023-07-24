/* eslint-disable no-unused-vars */
import axios from "axios";
// import BASE_URL from "env";

const BASE_URL = "http://localhost:9000";

function authenticate(account) {
  return axios
    .post(`${BASE_URL}/login`, account, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then((res) => res.data);
}

function useRefreshToken() {
  return axios.get(`${BASE_URL}/refresh`, {
    withCredentials: true,
  });
}

function getAllUsers() {
  return axios.get(`${BASE_URL}/users`);
}

function getUser(id) {
  return axios.get(`${BASE_URL}/login/getAccount/${id}`);
}

function searchUsers(search = "") {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/users/data`, { params: { search } })
      .then((res) => resolve(res.data))
      .catch((err) => {
        reject(err);
      });
  });
}

function register(account) {
  return axios.post(`${BASE_URL}/register`, account);
}

function updateUser(id, account) {
  return axios.put(`${BASE_URL}/user/${id}`, account);
}

export default {
  authenticate,
  useRefreshToken,
  getAllUsers,
  getUser,
  searchUsers,
  register,
  updateUser,
};
