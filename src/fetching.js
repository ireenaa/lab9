// import axios from 'axios';

// const BASE_URL = 'http://localhost:3001/api';

// export const getAllCars = async (filters = {}) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/cars`, { params: filters });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching cars:', error);
//     throw error;
//   }
// };

// export const getCarById = async (id) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/cars/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching car with ID ${id}:`, error);
//     throw error;
//   }
// };

import axios from "axios";

export const getCars = ( setSearchTerm, setSortOrder,  ) => {
    return axios.get("http://localhost:3001/read", {params: { setSearchTerm, setSortOrder } })
}