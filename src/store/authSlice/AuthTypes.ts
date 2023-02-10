export interface IUser {
	id: string
	email: string
	username: string
	dialogs: string[]
}

export interface IParams {
	params: {
		email: string
		password: string
		username?: string
	}
	path: string
}

export interface IData extends IUser {
	token: string
}

export interface AuthState extends IUser {
	loading: boolean
	isAuth: boolean
}
