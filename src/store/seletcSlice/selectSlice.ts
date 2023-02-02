import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SelectState {
	active: string
}

const initialState: SelectState = {
	active: 'Sign In',
}

export const selectSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setActive: (state, action: PayloadAction<string>) => {
			state.active = action.payload
		},
	},
})

export const { setActive } = selectSlice.actions

export default selectSlice.reducer
