import { FC, useEffect, useRef } from 'react'
import styles from './Chat.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import Message from './Message/Message'
import MessageInputField from './MessageInputField/MessageInputField'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { screenWidthCheck } from '../../utils/screenWidthCheck'
import { CgHello } from 'react-icons/all'
import { messageApi } from '../../services/MessagesService/MessagesService'
import { IMessage } from '../../services/MessagesService/MessageType'

interface ChatProps {
	companionUsername: string | undefined
}

const Chat: FC<ChatProps> = ({ companionUsername }) => {
	const intoViewRef = useRef<HTMLDivElement>(null)
	const { zIndex } = useAppSelector(state => state.zIndex)
	const dispatch = useAppDispatch()
	const params = useParams()
	const {
		data: messages,
		isLoading,
		refetch,
	} = messageApi.useFetchMessagesByDialogQuery(`${params.dialogId}`)
	const socket = new WebSocket('ws://localhost:5000')

	useEffect(() => {
		socket.onopen = () => {
			if (params.dialogId) {
				console.log(params.dialogId)
				socket.send(
					JSON.stringify({
						method: 'connection',
						dialogId: params.dialogId,
					})
				)
			}
		}
		socket.onmessage = (event: MessageEvent) => {
			const msg = JSON.parse(event.data)
			if (msg.method === 'connection') {
				console.log(msg.method)
			}
			if (msg.method === 'message') {
				console.log(msg)
				refetch()
			}
		}
	}, [params.dialogId])

	useEffect(() => {
		intoViewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
		})
	}, [messages])
	const [createMessage, {}] = messageApi.useCreateMessageMutation()
	const handleSendMessage = async (message: IMessage) => {
		await socket.send(JSON.stringify({ ...message, method: 'message' }))
		await createMessage(message)
	}
	return (
		<div className={styles.chat_block} style={{ zIndex }}>
			<div className={styles.header}>
				<NavLink
					className={styles.back}
					onClick={() => screenWidthCheck(1, dispatch)}
					to={'/chat'}
				>
					{'<-'}
				</NavLink>
				<h1>{companionUsername}</h1>
			</div>
			{isLoading && <h1>Loading...</h1>}
			<div
				className={
					messages?.length ? styles.chat_area : styles.messages_not
				}
			>
				{messages?.length ? (
					messages.map(mess => (
						<Message
							userId={mess.userId}
							message={mess.text}
							key={mess.id}
						/>
					))
				) : (
					<div className={styles.messages_not}>
						<h1>No messages</h1>
						<p>Send a message or click on the greeting below</p>
						<CgHello
							size={35}
							style={{
								color: '#ffff',
								marginTop: '10',
								cursor: 'pointer',
							}}
						/>
					</div>
				)}
				<div ref={intoViewRef}></div>
			</div>
			<MessageInputField handleSendMessage={handleSendMessage} />
		</div>
	)
}

export default Chat
