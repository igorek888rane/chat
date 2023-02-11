import { FC, useEffect } from 'react'
import styles from './ChatPage.module.scss'
import Dialogs from '../../components/Dialogs/Dialogs'
import Chat from '../../components/Chat/Chat'
import { useParams } from 'react-router-dom'
import { dialogApi } from '../../services/DialogsService/DialogsService'
import { messageApi } from '../../services/MessagesService/MessagesService'

const ChatPage: FC = () => {
	const params = useParams()
	const {
		data: dialogs,
		error,
		isLoading,
	} = dialogApi.useFetchDialogsByUserQuery()
	const dialog = dialogs?.find(dialog => dialog.dialogId === params.dialogId)
	const {
		data: messages,
		isLoading: isLoadingMess,
		refetch,
	} = messageApi.useFetchMessagesByDialogQuery(`${params.dialogId}`)
	const socket = new WebSocket('ws://localhost:5000')

	function connect() {
		socket.onopen = () => {
			socket.send(
				JSON.stringify({
					method: 'connection',
					dialogId: params.dialogId,
				})
			)
		}
		socket.onmessage = (event: MessageEvent) => {
			const msg = JSON.parse(event.data)
			console.log(msg)
			refetch()
		}
	}

	useEffect(() => {
		connect()
	}, [params.dialogId])

	return (
		<div className={styles.chat_block}>
			<Dialogs isLoading={isLoading} error={error} dialogs={dialogs} />
			{params.hasOwnProperty('dialogId') ? (
				<Chat
					messages={messages}
					isLoading={isLoadingMess}
					companionUsername={dialog?.companionUsername}
					socket={socket}
				/>
			) : (
				<div className={styles.no_chat}>
					<h2>Choose who you would like to write to</h2>
				</div>
			)}
		</div>
	)
}

export default ChatPage
