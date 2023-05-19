/* eslint-disable no-unused-vars */
import axios from "axios";
// import API_URL from "env";

const BASE_URL = "http://localhost:9000";

function getById(id) {
  return axios.get(`${BASE_URL}/login/getAccount/${id}`);
}

function searchNursery(region = "", start = "", end = "", search = "") {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/nursery/data`, {
        params: {
          region: region,
          start: start,
          end: end,
          search: search,
        },
      })
      .then((res) => resolve(res.data))
      .catch((err) => {
        reject(err);
      });
  });
}

function importNurseryData(imported_by, file) {
  const formData = new FormData();
  formData.append("imported_by", imported_by);
  formData.append("file", file);
  return axios.post(`${BASE_URL}/nursery`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
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
  getById,
  searchNursery,
  importNurseryData,
  downloadNurseryData,
};
