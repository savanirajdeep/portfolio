import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const portfolioAPI = {
  // Get all portfolio data
  getPortfolio: async () => {
    try {
      const response = await api.get('/portfolio');
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      throw error;
    }
  },

  // Get featured portfolio data
  getFeaturedPortfolio: async () => {
    try {
      const response = await api.get('/portfolio/featured');
      return response.data;
    } catch (error) {
      console.error('Error fetching featured portfolio data:', error);
      throw error;
    }
  },

  // Personal Info endpoints
  getPersonalInfo: async () => {
    try {
      const response = await api.get('/personal-info');
      return response.data;
    } catch (error) {
      console.error('Error fetching personal info:', error);
      throw error;
    }
  },

  // Skills endpoints
  getAllSkills: async () => {
    try {
      const response = await api.get('/skills');
      return response.data;
    } catch (error) {
      console.error('Error fetching skills:', error);
      throw error;
    }
  },

  getSkillsByCategory: async (category) => {
    try {
      const response = await api.get(`/skills/category/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching skills by category:', error);
      throw error;
    }
  },

  // Experience endpoints
  getAllExperiences: async () => {
    try {
      const response = await api.get('/experiences');
      return response.data;
    } catch (error) {
      console.error('Error fetching experiences:', error);
      throw error;
    }
  },

  getCurrentExperiences: async () => {
    try {
      const response = await api.get('/experiences/current');
      return response.data;
    } catch (error) {
      console.error('Error fetching current experiences:', error);
      throw error;
    }
  },

  // Projects endpoints
  getAllProjects: async () => {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  getFeaturedProjects: async () => {
    try {
      const response = await api.get('/projects/featured');
      return response.data;
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      throw error;
    }
  },

  getProjectsByCategory: async (category) => {
    try {
      const response = await api.get(`/projects/category/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects by category:', error);
      throw error;
    }
  },

  // Education endpoints
  getAllEducation: async () => {
    try {
      const response = await api.get('/education');
      return response.data;
    } catch (error) {
      console.error('Error fetching education:', error);
      throw error;
    }
  },

  getCurrentEducation: async () => {
    try {
      const response = await api.get('/education/current');
      return response.data;
    } catch (error) {
      console.error('Error fetching current education:', error);
      throw error;
    }
  },
};

export default api; 