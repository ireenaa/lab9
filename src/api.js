import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export const getAllCars = async (filters = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching car with ID ${id}:`, error);
    throw error;
  }
};
export const sortCars = async (sortBy) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/sort`, { params: { sortBy } });
    return response.data;
  } catch (error) {
    console.error('Error sorting cars:', error);
    throw error;
  }
};

export const searchCars = async (search) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/search`, { params: { search } });
    return response.data;
  } catch (error) {
    console.error('Error searching cars:', error);
    throw error;
  }
};

