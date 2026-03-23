<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background-color: #0f0f0f;
  color: #ffffff;
  min-height: 100vh;
}

input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 8px;
  color: #ffffff;
  font-size: 15px;
  outline: none;
  transition: border 0.3s;
}

input:focus {
  border-color: #6c63ff;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #574fd6;
}

a {
  color: #6c63ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>