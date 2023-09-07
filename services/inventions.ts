import axios from "axios";

const API_BASE_URL = "http://devopsudem-server.us-east-1.elasticbeanstalk.com";

export const postInvention = async (
  name: string,
  year: string,
  description: string,
  inventor: number
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/inventions`, {
      name,
      year,
      description,
      inventor,
    });
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

export const getInventions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/inventions`);
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};
