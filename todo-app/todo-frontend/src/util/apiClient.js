import axios from 'axios'
import { REACT_APP_BACKEND_URL } from './config'

const apiClient = axios.create({
  baseURL: REACT_APP_BACKEND_URL,
})

export default apiClient