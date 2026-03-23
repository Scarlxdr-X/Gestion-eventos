<template>
  <div>
    <h1>{{ mensaje }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'

const mensaje = ref('Cargando...')

onMounted(async () => {
  try {
    const respuesta = await api.get('/')
    mensaje.value = respuesta.data.mensaje
  } catch (error) {
    mensaje.value = 'Error conectando con el backend'
  }
})
</script>