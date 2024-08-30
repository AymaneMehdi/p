import axios from 'axios';

const API_BASE_URL = 'https://localhost:7083/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createGig = async (data: FormData) => {
  const token = localStorage.getItem('token');
  const response = await api.post('/gigs', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getGigs = async () => {
  const response = await api.get('/gigs');
  return response.data;
};

export const getGig = async (id: string) => {
  const response = await api.get(`/gigs/${id}`);
  return response.data;
};

export const updateGig = async (id: string, gigData: any) => {
  const token = localStorage.getItem('token');
  const response = await api.put(`/gigs/${id}`, gigData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteGig = async (id: string) => {
  const token = localStorage.getItem('token');
  await api.delete(`/gigs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default api;
