import axios from './axios'
import { IData, IParams, IUser } from '../store/authSlice/AuthTypes'

export const fetchAuth = async ({ params, path }: IParams) => {
	return await axios.post<IData>(`auth/${path}`, params)
}

export const fetchMe = async () => {
    return await axios.get<IUser>('auth/me')
}