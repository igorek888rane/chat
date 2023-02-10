import { FC } from 'react'
import styles from './Dialogs.module.scss'
import { Link } from 'react-router-dom'
import { dialogApi } from '../../services/DialogsService/DialogsService'
import DialogEl from './DialogEl'

const Dialogs: FC = () => {
	const {
		data: dialogs,
		error,
		isLoading,
	} = dialogApi.useFetchDialogsByUserQuery()

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
						/>
					))}
			</div>
		</div>
	)
}

export default Dialogs
