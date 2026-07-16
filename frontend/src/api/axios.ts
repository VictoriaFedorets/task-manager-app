import axios from "axios";

const DEFAULT_API_URL = "http://localhost:5000/api";

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    DEFAULT_API_URL,

  headers: {
    "Content-Type": "application/json",
  },
});
