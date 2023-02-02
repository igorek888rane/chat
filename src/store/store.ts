import { configureStore } from '@reduxjs/toolkit'
import select from './seletcSlice/selectSlice'

export const store = configureStore({
	reducer: {
		select,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
