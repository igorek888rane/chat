import { FC } from 'react'
import styles from './Dialogs.module.scss'
import DialogEl from './DialogEl'

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
			<h1 className={styles.header}>Dialogs</h1>
			{dialogs.map(el => (
				<DialogEl username={el.username} />
			))}
		</div>
	)
}

export default Dialogs
