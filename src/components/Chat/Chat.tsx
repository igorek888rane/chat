import { FC, useEffect, useRef, useState } from 'react'
import styles from './Chat.module.scss'
import { useParams } from 'react-router-dom'
import Message from './Message/Message'
import MessageInputField from './MessageInputField/MessageInputField'

export interface messageType {
	id: number
	userId: number
	message: string
}

const messagesData: messageType[] = [
	{
		id: 1,
		userId: 1,
		message: 'Hello',
	},
	{
		id: 2,
		userId: 1,
		message: 'How are you?',
	},
	{
		id: 3,
		userId: 2,
		message: 'Hello',
	},
	{
		id: 4,
		userId: 2,
		message: 'Good',
	},
	{
		id: 5,
		userId: 2,
		message: 'And you',
	},
	{
		id: 6,
		userId: 1,
		message: 'Good',
	},
]

const Chat: FC = () => {
	const params = useParams()
	const [messages, setMessages] = useState<messageType[]>(messagesData)
	const chatAreaRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		chatAreaRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
		})
	}, [messages])

	return (
		<div className={styles.chat_block}>
			<div className={styles.header}>
				<h1>{params.username}</h1>
			</div>
			<div className={styles.chat_area}>
				{messages.map(el => (
					<Message
						userId={el.userId}
						message={el.message}
						key={el.id}
					/>
				))}
				<div ref={chatAreaRef}></div>
			</div>
			<MessageInputField messages={messages} setMessages={setMessages} />
		</div>
	)
}

export default Chat
