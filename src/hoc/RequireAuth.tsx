import { FC, PropsWithChildren, ReactElement } from 'react'
import { useAppSelector } from '../hooks/useApp'
import { Navigate } from 'react-router-dom'

type childrenType = {
	children: ReactElement
}

const RequireAuth: FC<PropsWithChildren<childrenType>> = ({ children }) => {
	const { isAuth } = useAppSelector(state => state.auth)

	return isAuth ? children : <Navigate to={'/login'} />
}

export default RequireAuth
