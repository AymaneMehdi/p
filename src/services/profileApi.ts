import axios from 'axios';

const API_BASE_URL = 'https://localhost:7083/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProfile = async (): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.get('/profile/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data ?? 'An error occurred');
    }
    throw new Error('Network error');
  }
};

export const updateProfile = async (data: {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
}): Promise<void> => {
  try {
    const token = localStorage.getItem('token');
    await api.put('/profile/profile', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data ?? 'An error occurred');
    }
    throw new Error('Network error');
  }
};

export default api;
