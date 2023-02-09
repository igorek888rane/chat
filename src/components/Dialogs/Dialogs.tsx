import { FC } from 'react'
import styles from './Dialogs.module.scss'
import DialogEl from './DialogEl'
import { Link } from 'react-router-dom'

let dialogs = [
	{
		username: 'Igor',
		phoneNumber: '+79293457980',
	},
	{
		username: 'Masha',
		phoneNumber: '+79293457981',
	},
	{
		username: 'Vlad',
		phoneNumber: '+79293457982',
	},
	{
		username: 'Dima',
		phoneNumber: '+79293457983',
	},
]

interface DialogsProps {
	setZIndex: (zIndex: number) => void
}

const Dialogs: FC<DialogsProps> = ({ setZIndex }) => {
	return (
		<div className={styles.dialogs_block}>
			<Link to={'/chat'} className={styles.header}>
				<h1 className={styles.header_text}>Dialogs</h1>
			</Link>
			<div className={styles.dialogs}>
				{dialogs.map(el => (
					<DialogEl
						setZIndex={setZIndex}
						key={el.phoneNumber}
						username={el.username}
					/>
				))}
			</div>
		</div>
	)
}

export default Dialogs
