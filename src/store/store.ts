import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice/authSlice'
import messages from './messagesSlice/messagesSlice'
import zIndex from './zIndexSlice/zIndexSlice'

export const store = configureStore({
	reducer: {
		auth,
		messages,
		zIndex,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
