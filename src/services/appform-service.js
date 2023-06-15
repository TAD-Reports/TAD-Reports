/* eslint-disable no-unused-vars */
import axios from "axios";
// import BASE_URL from "env";

const DEFAULT_DELAY = 1000;

const BASE_URL = "http://localhost:9000";

function getApplicant(id) {
  return axios.get(`${BASE_URL}/appform/get/${id}`);
}

function searchApplicant(search = "") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(`${BASE_URL}/appform/data`, { params: { search } })
        .then((res) => resolve(res.data))
        .catch((err) => {
          reject(err);
        });
    }, DEFAULT_DELAY);
  });
}

function addApplicant(data, attachments, eligibility) {
  const formData = new FormData();

  // Append form data fields
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  // Append attachment files
  Object.keys(attachments).forEach((key) => {
    formData.append(key, attachments[key]);
  });

  // Append eligibility fields
  Object.keys(eligibility).forEach((key) => {
    formData.append(key, eligibility[key]);
  });

  return axios.post(`${BASE_URL}/appform`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

function deleteApplicant(id) {
  return axios.delete(`${BASE_URL}/appform/delete/${id}`);
}

export default {
  getApplicant,
  searchApplicant,
  addApplicant,
  deleteApplicant,
};
