import { FC } from 'react'
import styles from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useApp'
import { setZIndex } from '../../store/zIndexSlice/zIndexSlice'

interface DialogsProps {
	username: string
}

const DialogEl: FC<DialogsProps> = ({ username }) => {
	const dispatch = useAppDispatch()
	return (
		<NavLink
			to={`/chat/${username}`}
			className={({ isActive }) =>
				isActive
					? `${styles.dialog} ${styles.active}`
					: `${styles.dialog}`
			}
			onClick={() => dispatch(setZIndex(3))}
		>
			<div className={styles.dialog_avatar}>{username.slice(0, 2)}</div>
			<div className={styles.dialog_name}>{username}</div>
		</NavLink>
	)
}

export default DialogEl
