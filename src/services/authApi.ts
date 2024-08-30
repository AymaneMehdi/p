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



export const createGig = async (data: FormData): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.post('/gigs', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data ?? 'An error occurred');
    }
    throw new Error('Network error');
  }
};

export const getGigs = async (): Promise<any> => {
  try {
    const response = await api.get('/gigs');
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data ?? 'An error occurred');
    }
    throw new Error('Network error');
  }
};

export interface RegisterDto {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  phoneNumber: string;
  city: string;
}

export interface LoginDto {
  userName: string;
  password: string;
}

interface LoginResponse {
  token: string;
  role: 'OWNER' | 'USER' | 'ADMIN';
}

export const registerUser = async (userData: RegisterDto): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>('/Auth/register', userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data as string);
    }
    throw new Error('Network error');
  }
};

export const loginUser = async (userData: LoginDto): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>('/Auth/login', userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data as string);
    }
    throw new Error('Network error');
  }
};


export const makeAdmin = async (formData: FormData): Promise<void> => {
  try {
    await api.post('/auth/make-admin', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data ?? 'An error occurred');
    }
    throw new Error('Network error');
  }
};

export default api;
