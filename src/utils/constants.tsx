require("dotenv").config();

export const BASE_URL =
  process.env.REACT_APP_WEBSITE_ENVIRONMENT === "development"
    ? // ? 'http://192.168.0.88:8000'
      "http://192.168.0.88:8000"
    : "http://143.198.188.215:8000";
