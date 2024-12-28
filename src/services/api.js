import axios from 'axios';

const API_BASE_URL = 'https://your-backend-url/api';

export const createForm = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/form`, formData);
  return response.data;
};

export const getForm = async (formId) => {
  const response = await axios.get(`${API_BASE_URL}/form/${formId}`);
  return response.data;
};

export const submitResponse = async (responseData) => {
  const response = await axios.post(`${API_BASE_URL}/response`, responseData);
  return response.data;
};
