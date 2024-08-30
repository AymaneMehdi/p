import axios from 'axios';

const API_BASE_URL = 'https://localhost:7083/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getCategories = async (): Promise<any> => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
};

export default api;
