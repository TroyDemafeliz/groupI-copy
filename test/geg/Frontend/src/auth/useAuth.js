// useAuth.js
import { ref, onMounted } from 'vue';
import router from '@/router';
import { jwtDecode } from 'jwt-decode';
import api from '@/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/token';

export const isAuthenticated = ref(false);

async function refreshToken() {
  console.log("Attempting to refresh token...");
  const rToken = localStorage.getItem(REFRESH_TOKEN);
  if (!rToken) {
    console.log("No refresh token available.");
    isAuthenticated.value = false;
    router.push('/login');
    return;
  }

  try {
    const res = await api.post('/backend/token/refresh/', { refresh: rToken });
    if (res.status === 200) {
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      isAuthenticated.value = true;
      console.log("Token refreshed successfully.");
    } else {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    console.error('Authentication error:', error);
    isAuthenticated.value = false;
    router.push('/login');
  }
}

async function checkAuth() {
  console.log("Checking authentication...");
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (!token) {
    console.log("No access token found.");
    isAuthenticated.value = false;
    return;
  }
  const decoded = jwtDecode(token);
  const now = Date.now() / 1000;
  console.log("Token expires at:", decoded.exp, "Current time:", now);
  if (decoded.exp < now) {
    console.log("Token has expired, refreshing...");
    await refreshToken();
  } else {
    isAuthenticated.value = true;
    console.log("User is authenticated.");
  }
}

export const useAuth = () => {
  onMounted(checkAuth);
  return { isAuthenticated, checkAuth };
};
