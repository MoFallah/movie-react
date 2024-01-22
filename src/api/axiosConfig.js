import axios from "axios";
export default axios.create({
  baseURL: "https://movie-spring-boot-5w23.onrender.com",
  headers: { "ngrok-skip-browser-warning": "true" },
});
