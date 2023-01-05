import axios from "axios";

const ApiService = (path, method, query, body) => {
  const accessToken = localStorage.getItem("accessToken");
  const url = "https://api.coollionfi.com/v1.1" + path;

  const options = {
    method,
    url,
    data: body ?? {},
    headers: {
      Authorization: "",
    },
  };

  if (accessToken) {
    options.headers.Authorization = `Bearer ${accessToken}`;
  }
  return new Promise((resolve, reject) => {
    axios(options)
      .then(resolve)
      .catch(async (e) => {
        console.log(e);
        if (
          (e.response?.status === 401 && accessToken) ||
          e.response?.status === 403
        ) {
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
        } else {
          return reject(e);
        }
      });
  });
};

export default ApiService;
