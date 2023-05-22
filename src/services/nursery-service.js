/* eslint-disable no-unused-vars */
import axios from "axios";
// import API_URL from "env";

const BASE_URL = "http://localhost:9000";

function getById(id) {
  return axios.get(`${BASE_URL}/nursery/get/${id}`);
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

function deleteNursery(id) {
  return axios.get(`${BASE_URL}/nursery/delete/${id}`);
}

function updateNursery(id, nursery) {
  return axios.get(`${BASE_URL}/nursery/update/${id}`, nursery);
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

function downloadNurseryTemplate(fileName) {
  return axios
    .get(`${BASE_URL}/download/${fileName}`, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up by removing the link element
      window.URL.revokeObjectURL(url); // Clean up by revoking the temporary URL
    })
    .catch((error) => {
      console.error("Error occurred while downloading template:", error);
    });
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getById,
  searchNursery,
  deleteNursery,
  updateNursery,
  importNurseryData,
  downloadNurseryData,
  downloadNurseryTemplate,
};
