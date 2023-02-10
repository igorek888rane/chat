import { FC } from 'react'
import styles from './Dialogs.module.scss'
import { Link } from 'react-router-dom'
import DialogEl from './DialogEl'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { IDialog } from '../../services/DialogsService/DialogType'

interface DialogsProps {
	isLoading: boolean
	error: SerializedError | FetchBaseQueryError | undefined
	dialogs: IDialog[] | undefined
}

const Dialogs: FC<DialogsProps> = ({ isLoading, error, dialogs }) => {

	return (
		<div className={styles.dialogs_block}>
			<Link to={'/chat'} className={styles.header}>
				<h1 className={styles.header_text}>Dialogs</h1>
			</Link>
			<div className={styles.dialogs}>
				{isLoading && <h1>Идет загрузка...</h1>}
				{error && <h1>Произошла ошибка при загрузке</h1>}
				{dialogs &&
					dialogs?.map(dialog => (
						<DialogEl
							key={dialog.dialogId}
							dialogId={dialog.dialogId}
							username={dialog.companionUsername}
							lastMessage={dialog.lastMessage}
						/>
					))}
			</div>
		</div>
	)
}

export default Dialogs
