import { FC } from 'react'
import styles from './NavBar.module.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useApp'
import {
	BiLogOut,
	BsFillChatRightTextFill,
	FaSearch,
	VscSettings,
} from 'react-icons/all'
import { logOut } from '../../store/authSlice/authSlice'

const NavBar: FC = () => {
	const dispatch = useAppDispatch()
	const params = useParams()
	const logOutHandler = () => {
		window.localStorage.removeItem('token')
		dispatch(logOut())
	}
	return (
		<div
			style={
				params.hasOwnProperty('username')
					? { display: 'none' }
					: { display: 'flex' }
			}
			className={styles.nav_block}
		>
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
					<VscSettings
						size={20}
						style={{ color: '#5d606a', transform: 'rotate(90deg)' }}
					/>
				</NavLink>
			</div>
			<Link onClick={logOutHandler} to={'/auth'}>
				<BiLogOut size={25} style={{ color: '#5d606a' }} />
			</Link>
		</div>
	)
}

export default NavBar
