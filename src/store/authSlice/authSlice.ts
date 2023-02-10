import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface IUser {
	id: string
	email: string
	username: string
	dialogs: string[]
}

export interface AuthState extends IUser {
	loading: boolean
	isAuth: boolean
}

const initialState: AuthState = {
	id: '',
	email: '',
	username: '',
	dialogs: [],
	loading: false,
	isAuth: false,
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
export const getMe = createAsyncThunk('auth/getMe', async () => {
	const { data } = await axios.get<IUser>('http://localhost:5000/auth/me', {
		headers: {
			Authorization: ` Bearer ${window.localStorage.getItem('token')}`,
		},
	})
	return data
})

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
	extraReducers: {
		[setAuth.pending.type]: (state: AuthState) => {
			state.loading = true
		},
		[setAuth.fulfilled.type]: (
			state: AuthState,
			action: PayloadAction<IUser>
		) => {
			state.id = action.payload.id
			state.email = action.payload.email
			state.username = action.payload.username
			state.dialogs = action.payload.dialogs
			state.loading = false
			state.isAuth = true
		},
		[setAuth.rejected.type]: (state: AuthState) => {
			state.loading = false
		},
		[getMe.pending.type]: (state: AuthState) => {
			state.loading = true
		},
		[getMe.fulfilled.type]: (
			state: AuthState,
			action: PayloadAction<IUser>
		) => {
			state.id = action.payload.id
			state.email = action.payload.email
			state.username = action.payload.username
			state.dialogs = action.payload.dialogs
			state.loading = false
			state.isAuth = true
		},
		[getMe.rejected.type]: (state: AuthState) => {
			state.loading = false
		},
	},
})

export const { logOut } = authSlice.actions

export default authSlice.reducer
