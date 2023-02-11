import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice/authSlice'
import messages from './messagesSlice/messagesSlice'
import zIndex from './zIndexSlice/zIndexSlice'
import { dialogApi } from '../services/DialogsService/DialogsService'
import { messageApi } from '../services/MessagesService/MessagesService'

export const store = configureStore({
	reducer: {
		auth,
		messages,
		zIndex,
		[dialogApi.reducerPath]: dialogApi.reducer,
		[messageApi.reducerPath]: messageApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			dialogApi.middleware,
			messageApi.middleware
		),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
