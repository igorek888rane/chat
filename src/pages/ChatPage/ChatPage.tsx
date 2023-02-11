import { FC } from 'react'
import styles from './ChatPage.module.scss'
import Dialogs from '../../components/Dialogs/Dialogs'
import Chat from '../../components/Chat/Chat'
import { useParams } from 'react-router-dom'
import { dialogApi } from '../../services/DialogsService/DialogsService'

const ChatPage: FC = () => {
	const params = useParams()
	const {
		data: dialogs,
		error,
		isLoading,
	} = dialogApi.useFetchDialogsByUserQuery()
	const dialog = dialogs?.find(dialog => dialog.dialogId === params.dialogId)

	// const socket = new WebSocket('ws://localhost:5000')
	//
	// function connect() {
	// 	socket.onopen = () => {
	// 		socket.send(
	// 			JSON.stringify({
	// 				method: 'connection',
	// 				dialogId: params.dialogId,
	// 			})
	// 		)
	// 		console.log('connect')
	// 	}
	// 	socket.onmessage = (event: MessageEvent) => {
	// 		const msg = JSON.parse(event.data)
	// 		console.log(msg)
	//
	// 		switch (msg.method) {
	// 			case 'connection':
	// 				break
	// 			case 'message':
	// 				break
	// 		}
	// 	}
	// }
	//
	// useEffect(() => {
	// 	connect()
	// }, [params.dialogId])

	return (
		<div className={styles.chat_block}>
			<Dialogs isLoading={isLoading} error={error} dialogs={dialogs} />
			{params.hasOwnProperty('dialogId') ? (
				<Chat companionUsername={dialog?.companionUsername} />
			) : (
				<div className={styles.no_chat}>
					<h2>Choose who you would like to write to</h2>
				</div>
			)}
		</div>
	)
}

export default ChatPage
