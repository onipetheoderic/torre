import Axios from "axios";
import PropTypes from "prop-types";
import { BASE_URL } from "./constants";

const axiosCancelTokenSource = Axios.CancelToken.source();

interface IrequestParams {
  url: string;
  method: string;
  data?: string;
  header?: string;
}

const apiService = (params: IrequestParams) => {
  let { url, method, data, header } = params;
  if (!url || typeof url !== "string") {
    axiosCancelTokenSource.cancel();
    throw new Error("Please pass a string url to this function: /path/to/api");
  }
  if (!method || typeof method !== "string") {
    axiosCancelTokenSource.cancel();
    throw new Error(
      "Please add string api request type: GET, POST, PUT, PATCH, DELETE"
    );
  }

  return new Promise((resolve, reject) => {
    console.log(`${BASE_URL}${url}`, "Query urls");
    let params = {
      url: `${BASE_URL}${url}`,
      data,
      headers: header,
    };
    Axios({ ...params, method: method === "GET" ? "GET" : "POST" })
      .then(res => {
        return resolve(res);
      })
      .catch(error => {
        console.log(error, error.response, "Api service errolr");
        if (error && !error.response) {
          alert(
            "Could not connect to the server, please check your internet connection"
          );

          axiosCancelTokenSource.cancel();
          return reject(error);
        }
        return reject(JSON.stringify(error.response.data));
      });
  });
};

apiService.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  headers: PropTypes.object.isRequired,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllHosts: () => {
    let params = {
      url: "/client/get_user_profile",
      method: "GET",
    };
    return apiService(params);
  },
};
