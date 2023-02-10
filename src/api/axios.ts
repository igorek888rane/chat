import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		Authorization: ` Bearer ${window.localStorage.getItem('token')}`,
	},
})

export default instance
