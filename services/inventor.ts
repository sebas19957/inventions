import axios from "axios";

const API_BASE_URL = "http://devopsudem-server.us-east-1.elasticbeanstalk.com";

export const postInventor = async (name: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/inventors`, {
      name,
    });
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

export const putInventor = async (id: number, name: string) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/inventors`, {
      id,
      name,
    });
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

export const getInvetors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/inventors`);
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

export const removeInventor = async (id: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/inventors?id=${id}`);
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};
