import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SelectState {
	isAuth: boolean
	id: number
}

const initialState: SelectState = {
	isAuth: !!window.localStorage.getItem('auth'),
	id: 1,
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
