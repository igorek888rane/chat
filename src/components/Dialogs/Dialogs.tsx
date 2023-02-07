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

const Dialogs: FC = () => {
	return (
		<div className={styles.dialogs_block}>
			<Link to={'/'} className={styles.header}>
				<h1 className={styles.header_text}>Dialogs</h1>
			</Link>
			<div className={styles.dialogs}>
				{dialogs.map(el => (
					<DialogEl key={el.phoneNumber} username={el.username} />
				))}
			</div>
		</div>
	)
}

export default Dialogs
