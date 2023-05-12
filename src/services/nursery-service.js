/* eslint-disable no-unused-vars */
import axios from "axios";
// import API_URL from "env";

const DEFAULT_DELAY = 1000;

const BASE_URL = "http://localhost:9000";

function getNurseryById(id) {
  return axios.get(`${BASE_URL}/login/getAccount/${id}`);
}

function getNurseries() {
  return axios.get(`${BASE_URL}/nurseries`);
}

function searchNursery(search = "") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(`${BASE_URL}/nurseries`, { params: { username: search } })
        .then((res) => resolve(res.data))
        .catch((err) => {
          reject(err);
        });
    }, DEFAULT_DELAY);
  });
}

function importNurseryData(nurseryData) {
  return axios.post(`${BASE_URL}/nursery`, nurseryData);
}

function downloadNurseryData(report, filename, fileType) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${BASE_URL}/report/generate`,
      responseType: "blob",
      data: report,
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${filename}.${fileType}`);
        document.body.appendChild(link);
        link.click();
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getNurseryById,
  getNurseries,
  searchNursery,
  importNurseryData,
  downloadNurseryData,
};
