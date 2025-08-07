import { BASE_URL } from '@/constants/appConstants';
import { store } from '@/store/store';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = axios.create({
  baseURL: BASE_URL,
headers: {
  'Content-Type': 'application/json',
  'ngrok-skip-browser-warning': '1',
}

});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    // @ts-ignore
        const token = state.user.userInfo.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    toast.error('Request failed to send');
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response.config.method && !['get', 'GET'].includes(response.config.method)) {
      const message = response.data?.message || 'successful';

    toast.success(message, {
  style: {
    background: '#ffffff',
    color: 'green'
  }
});    }
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      const message = error.response.data?.message || 
                     error.response.data?.error || 
                     `Request failed with status ${error.response.status}`;
      
      // Don't show toast for 401 if you handle it separately
      if (error.response.status !== 401) {
        toast.error(message,{ style: {
          background: '#ffffff',
          color: 'red'
        }});
      } else {
        console.log('Unauthorized - redirecting to login...');
        // Optionally show a different message for 401
        toast.info('Session expired. Please login again.');
      }
    } else if (error.request) {
      // Request was made but no response received
      // toast.error('No response from server. Please check your connection.');
      console.error('No response from server. Please check your connection.');
    } else {
      // Something happened in setting up the request
      toast.error(`Request error: ${error.message}`);
    }
    
    return Promise.reject(error);
  }
);

export default api;