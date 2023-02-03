import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SelectState {
	isAuth: boolean
}

const initialState: SelectState = {
	isAuth: !!window.localStorage.getItem('auth'),
}

export const authSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
	},
})

export const { setIsAuth } = authSlice.actions

export default authSlice.reducer
