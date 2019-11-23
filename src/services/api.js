import axios from "axios";

const api = axios.create({
  baseURL: "https://sheltered-depths-01167.herokuapp.com/"
});

export default api;
