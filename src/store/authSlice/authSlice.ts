import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface IUser {
	id: string
	email: string
	username: string
	dialogs: string[]
}

export interface AuthState extends IUser {
	loading: boolean
}

const initialState: AuthState = {
	id: '',
	email: '',
	username: '',
	dialogs: [],
	loading: false,
}

interface IParams {
	params: {
		email: string
		password: string
		username?: string
	}
	path: string
}

interface IData extends IUser {
	token: string
}

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

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut(state: AuthState) {
			state.id = ''
			state.email = ''
			state.username = ''
			state.dialogs = []
		},
	},
	extraReducers(builder) {
		builder.addCase(setAuth.pending, state => {
			state.loading = true
		})
		builder.addCase(setAuth.fulfilled, (state, action) => {
			state.id = action.payload.id
			state.email = action.payload.email
			state.username = action.payload.username
			state.dialogs = action.payload.dialogs
			state.loading = false
		})
		builder.addCase(setAuth.rejected, state => {
			state.loading = false
		})
	},
})

export const { logOut } = authSlice.actions

export default authSlice.reducer
