import { FC, PropsWithChildren, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useApp'

type childrenType = {
	children: ReactElement
}

const RequireAuth: FC<PropsWithChildren<childrenType>> = ({ children }) => {
	const { id } = useAppSelector(state => state.auth)

	return id ? children : <Navigate to={'/auth'} />
}

export default RequireAuth
