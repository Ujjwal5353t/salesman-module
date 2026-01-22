import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// SuperAdmin Login
export const superAdminLogin = async (username, email, password) => {
  const response = await api.post("/superadminkalogin12345", {
    username,
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

// Admin Login
export const adminLogin = async (username, email, password, adminType) => {
  const response = await api.post("/admin/login", {
    username,
    email,
    password,
    adminType,
  });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

export const retailerLogin = async (username, email, password) => {
  const response = await api.post("/retailer/login", {
    username,
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export default api;
