import { FC, useEffect, useRef, useState } from 'react'
import styles from './Chat.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import Message from './Message/Message'
import MessageInputField from './MessageInputField/MessageInputField'

export interface messageType {
	id: number
	userId: number
	message: string
}

interface ChatProps {
	zIndex: number
	setZIndex: (zIndex: number) => void
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

const Chat: FC<ChatProps> = ({ zIndex, setZIndex }) => {
	const params = useParams()
	const [messages, setMessages] = useState<messageType[]>(messagesData)
	const intoViewRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		intoViewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
		})
	}, [messages])

	return (
		<div className={styles.chat_block} style={{ zIndex }}>
			<div className={styles.header}>
				<NavLink
					className={styles.back}
					onClick={() => setZIndex(1)}
					to={'/chat'}
				>
					{'<-'}
				</NavLink>
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
				<div ref={intoViewRef}></div>
			</div>
			<MessageInputField messages={messages} setMessages={setMessages} />
		</div>
	)
}

export default Chat
