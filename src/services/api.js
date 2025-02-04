import axios from "axios";

const api = axios.create({ baseURL: 'http://192.168.0.86/baselaravel/public/api' });

export default api;