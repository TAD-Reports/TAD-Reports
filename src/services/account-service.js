/* eslint-disable no-unused-vars */
import axios from "axios";
// import BASE_URL from "env";

const DEFAULT_DELAY = 1000;

const BASE_URL = "http://localhost:9000";

function authenticate(account) {
  return axios.post(`${BASE_URL}/login`, account).then((res) => res.data);
}

function getAllUsers() {
  return axios.get(`${BASE_URL}/users`);
}

function getUser(id) {
  return axios.get(`${BASE_URL}/login/getAccount/${id}`);
}

function searchUsers(search = "") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(`${BASE_URL}/login/search`, { params: { username: search } })
        .then((res) => resolve(res.data))
        .catch((err) => {
          reject(err);
        });
    }, DEFAULT_DELAY);
  });
}

function addUser(account) {
  return axios.post(`${BASE_URL}/login/addAccount`, account);
}

function updateUser(account) {
  return axios.put(`${BASE_URL}/login/updateAccount`, account);
}

export default {
  authenticate,
  getAllUsers,
  getUser,
  searchUsers,
  addUser,
  updateUser,
};
