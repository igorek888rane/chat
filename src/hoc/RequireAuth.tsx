import { FC, PropsWithChildren, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useApp'

type childrenType = {
	children: ReactElement
}

const RequireAuth: FC<PropsWithChildren<childrenType>> = ({ children }) => {
	const { isAuth } = useAppSelector(state => state.auth)

	return isAuth ? children : <Navigate to={'/auth'} />
}

export default RequireAuth
