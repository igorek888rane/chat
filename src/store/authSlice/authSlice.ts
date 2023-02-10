import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, IUser } from './AuthTypes'
import { getMe, setAuth } from './AsyncThunk'

const initialState: AuthState = {
	id: '',
	email: '',
	username: '',
	dialogs: [],
	loading: false,
	isAuth: false,
}

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
