import axios from "axios";

export const getAllCampers = async (url) => {
  try {
    const response = await axios.get(url);
    return response?.data;
  } catch (error) {
    //handle error
  }
};
