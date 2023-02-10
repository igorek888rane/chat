import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IDialog } from './DialogType'

export const dialogApi = createApi({
	reducerPath: `dialogApi`,
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}dialog`,
		headers: {
			Authorization: ` Bearer ${window.localStorage.getItem('token')}`,
		},
	}),
	tagTypes: ['Dialog'],
	endpoints: build => ({
		fetchDialogsByUser: build.query<IDialog[], void>({
			query: () => ({
				url: '/getDialogsByUser',
			}),
			providesTags: () => ['Dialog'],
		}),
	}),
})
