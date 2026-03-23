<template>
  <div class="contenedor">
    <div class="tarjeta">
      <h2>Crear cuenta</h2>
      <p class="subtitulo">Regístrate para comenzar</p>
      <input v-model="nombre" placeholder="Nombre completo" />
      <input v-model="email" placeholder="Correo electrónico" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="registrar">Registrarse</button>
      <p class="mensaje" v-if="mensaje">{{ mensaje }}</p>
      <p class="enlace">¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../api'
import { useRouter } from 'vue-router'

const router = useRouter()
const nombre = ref('')
const email = ref('')
const password = ref('')
const mensaje = ref('')

const registrar = async () => {
  try {
    const respuesta = await api.post('/auth/registro', {
      nombre: nombre.value,
      email: email.value,
      password: password.value
    })
    mensaje.value = respuesta.data.mensaje
    router.push('/login')
  } catch (error) {
    mensaje.value = error.response?.data?.mensaje || 'Error al registrarse'
  }
}
</script>

<style scoped>
.contenedor {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tarjeta {
  background-color: #1a1a1a;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  border: 1px solid #2a2a2a;
}

h2 {
  font-size: 28px;
  margin-bottom: 8px;
}

.subtitulo {
  color: #888;
  margin-bottom: 28px;
  font-size: 14px;
}

.mensaje {
  margin-top: 16px;
  color: #ff6b6b;
  font-size: 14px;
  text-align: center;
}

.enlace {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #888;
}
</style>