import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fluffy-waffle-jj4pprqx65wj3jjj6-3000.app.github.dev'
})

export default api