import { FC } from 'react'
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useApp'
import { setIsAuth } from '../../store/authSlice/authSlice'

const Nav: FC = () => {
	const dispatch = useAppDispatch()
	const logOut = () => {
		window.localStorage.removeItem('auth')
		dispatch(setIsAuth(false))
	}
	return (
		<div className={styles.nav_block}>
			<Link to={'/chat'}>Chat</Link>
			<Link to={'/search'}>Search</Link>
			<Link onClick={logOut} to={'/login'}>
				logOut
			</Link>
		</div>
	)
}

export default Nav
