import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
	baseURL: 'http://localhost:5000/',
	headers: {
		Authorization: ` Bearer ${window.localStorage.getItem('token')}`,
	},
})

export default instance
