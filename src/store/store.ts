import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice/authSlice'
import messages from './messagesSlice/messagesSlice'
import zIndex from './zIndexSlice/zIndexSlice'
import { dialogApi } from '../services/DialogsService/DialogsService'

export const store = configureStore({
	reducer: {
		auth,
		messages,
		zIndex,
		[dialogApi.reducerPath]: dialogApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(dialogApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
