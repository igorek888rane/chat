import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios/index'
import { IData, IParams, IUser } from './AuthTypes'

export const setAuth = createAsyncThunk(
	'auth/setIsAuth',
	async ({ params, path }: IParams) => {
		const { data } = await axios.post<IData>(
			`http://localhost:5000/auth/${path}`,
			params
		)
		window.localStorage.setItem('token', data.token)
		return data
	}
)
export const getMe = createAsyncThunk('auth/getMe', async () => {
	const { data } = await axios.get<IUser>('http://localhost:5000/auth/me', {
		headers: {
			Authorization: ` Bearer ${window.localStorage.getItem('token')}`,
		},
	})
	return data
})
