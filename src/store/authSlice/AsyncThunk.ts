import { createAsyncThunk } from '@reduxjs/toolkit'
import { IParams } from './AuthTypes'
import { fetchAuth, fetchMe } from '../../api/authApi'

export const setAuth = createAsyncThunk(
	'auth/setIsAuth',
	async ({ params, path }: IParams) => {
		const { data } = await fetchAuth({ params, path })
		window.localStorage.setItem('token', data.token)
		return data
	}
)
export const getMe = createAsyncThunk('auth/getMe', async () => {
	const { data } = await fetchMe()
	return data
})
