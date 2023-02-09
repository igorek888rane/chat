import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
	isAuth: boolean
	id: number
}

const initialState: AuthState = {
	isAuth: !!window.localStorage.getItem('auth'),
	id: 1,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
	},
})

export const { setIsAuth } = authSlice.actions

export default authSlice.reducer
