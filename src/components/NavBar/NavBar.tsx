import { FC } from 'react'
import styles from './NavBar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useApp'
import { setIsAuth } from '../../store/authSlice/authSlice'
import {
	BiLogOut,
	BsFillChatRightTextFill,
	FaSearch,
	VscSettings,
} from 'react-icons/all'

const NavBar: FC = () => {
	const dispatch = useAppDispatch()
	const logOut = () => {
		window.localStorage.removeItem('auth')
		dispatch(setIsAuth(false))
	}
	return (
		<div className={styles.nav_block}>
			<div className={styles.nav_link}>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.active : ''
					}
					to={'/chat'}
				>
					<BsFillChatRightTextFill
						size={20}
						style={{
							color: '#5d606a',
						}}
					/>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.active : ''
					}
					to={'/search'}
				>
					<FaSearch size={20} style={{ color: '#5d606a' }} />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.active : ''
					}
					to={'/settings'}
				>
					<VscSettings size={20} style={{ color: '#5d606a' }} />
				</NavLink>
			</div>
			<Link onClick={logOut} to={'/login'}>
				<BiLogOut size={25} style={{ color: '#5d606a' }} />
			</Link>
		</div>
	)
}

export default NavBar
