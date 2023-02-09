import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SelectState {
	zIndex: number
}

const initialState: SelectState = {
	zIndex: 1,
}

export const ZIndexSlice = createSlice({
	name: 'zIndex',
	initialState,
	reducers: {
		setZIndex: (state, action: PayloadAction<number>) => {
			state.zIndex = action.payload
		},
	},
})

export const { setZIndex } = ZIndexSlice.actions

export default ZIndexSlice.reducer
