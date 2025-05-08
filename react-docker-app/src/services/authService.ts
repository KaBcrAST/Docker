import axios from 'axios';
import sha256 from 'crypto-js/sha256';

const API_URL = 'https://react-gpsapi.vercel.app/api';

export interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    role: string;
  }
}

const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const hashedPassword = sha256(password).toString();
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password: hashedPassword
      });
      
      // Vérifier que l'utilisateur est un administrateur
      if (response.data.user && response.data.user.role !== 'admin') {
        throw new Error('Accès réservé aux administrateurs');
      }
      
      // Stocker le token et l'état d'authentification
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user || {}));
        localStorage.setItem('isAuthenticated', 'true');
        
        // Configure axios pour inclure le token dans les futures requêtes
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }
      
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },
  
  logout: (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    delete axios.defaults.headers.common['Authorization'];
  },
  
  isAuthenticated: (): boolean => {
    return localStorage.getItem('isAuthenticated') === 'true';
  },
  
  // Nouvelle méthode pour vérifier si l'utilisateur est admin
  isAdmin: (): boolean => {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      return user && user.role === 'admin';
    } catch (e) {
      return false;
    }
  },
  
  getToken: (): string | null => {
    return localStorage.getItem('token');
  },
  
  setupAxios: (): void => {
    // Configure axios au démarrage avec le token s'il existe
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
};

export default authService;