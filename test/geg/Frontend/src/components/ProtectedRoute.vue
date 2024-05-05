<template>
    <div v-if="isAuthorized">
      <slot></slot> 
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import router from '@/router';
  import { jwtDecode } from 'jwt-decode';
  import api from '@/api';
  import { REFRESH_TOKEN, ACCESS_TOKEN } from '@/token';
  
  const isAuthorized = ref(false);
  
  const setIsAuthorized = (authorization) => {
    isAuthorized.value = authorization;
    if (!authorization) {
      router.push('/login');
    }
  };
  
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post('/backend/token/refresh/', { refresh: refreshToken });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error(error);
      setIsAuthorized(false);
    }
  };
  
  const checkAuth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    if (decoded.exp < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };
  
  onMounted(() => {
    checkAuth();
  });
  </script>
  