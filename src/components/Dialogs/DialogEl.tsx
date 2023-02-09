import { FC } from 'react'
import styles from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom'

interface DialogsProps {
	username: string
	setZIndex: (zIndex: number) => void
}

const DialogEl: FC<DialogsProps> = ({ username, setZIndex }) => {
	return (
		<NavLink
			to={`/chat/${username}`}
			className={({ isActive }) =>
				isActive
					? `${styles.dialog} ${styles.active}`
					: `${styles.dialog}`
			}
			onClick={() => setZIndex(5)}
		>
			<div className={styles.dialog_avatar}>{username.slice(0, 2)}</div>
			<div className={styles.dialog_name}>{username}</div>
		</NavLink>
	)
}

export default DialogEl
