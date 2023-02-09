import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { messageType } from './messagesType'

export interface messagesState {
	messages: messageType[]
}

const initialState: messagesState = {
	messages: [],
}

export const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages: (
			state: messagesState,
			action: PayloadAction<messageType>
		) => {
			console.log(action)
			state.messages.push(action.payload)
		},
	},
})

export const { setMessages } = messagesSlice.actions

export default messagesSlice.reducer
