import axios from "axios";

const ApiService = (path, method, query, body) => {
  const accessToken = localStorage.getItem("accessToken");
  const url = process.env.REACT_APP_API_URL + path;

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
  console.log(options);
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
