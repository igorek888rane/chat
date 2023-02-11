import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IMessage } from './MessageType'

export const messageApi = createApi({
	reducerPath: `messageApi`,
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}message`,
		headers: {
			Authorization: ` Bearer ${window.localStorage.getItem('token')}`,
		},
	}),
	tagTypes: ['Message'],
	endpoints: build => ({
		fetchMessagesByDialog: build.query<IMessage[], string>({
			query: (id: string) => ({
				url: `/getMessagesByDialog/${id}`,
			}),
			providesTags: () => ['Message'],
		}),
		createMessage: build.mutation<IMessage, IMessage>({
			query: message => ({
				url: `createMessage`,
				method: 'POST',
				body: message,
			}),
			invalidatesTags: ['Message'],
		}),
	}),
})
