import { FC, useEffect, useRef } from 'react'
import styles from './Chat.module.scss'
import { NavLink } from 'react-router-dom'
import Message from './Message/Message'
import MessageInputField from './MessageInputField/MessageInputField'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { screenWidthCheck } from '../../utils/screenWidthCheck'
import { CgHello } from 'react-icons/all'
import { setMessages } from '../../store/messagesSlice/messagesSlice'

interface ChatProps {
	companionUsername: string | undefined
}

const Chat: FC<ChatProps> = ({ companionUsername }) => {
	const intoViewRef = useRef<HTMLDivElement>(null)
	const { messages } = useAppSelector(state => state.messages)
	const { zIndex } = useAppSelector(state => state.zIndex)
	const { id } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()
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
					onClick={() => screenWidthCheck(1, dispatch)}
					to={'/chat'}
				>
					{'<-'}
				</NavLink>
				<h1>{companionUsername}</h1>
			</div>
			<div
				className={
					messages.length ? styles.chat_area : styles.messages_not
				}
			>
				{messages.length ? (
					messages.map(el => (
						<Message
							userId={el.userId}
							message={el.message}
							key={el.id}
						/>
					))
				) : (
					<div className={styles.messages_not}>
						<h1>No messages</h1>
						<p>Send a message or click on the greeting below</p>
						<CgHello
							onClick={() =>
								dispatch(
									setMessages({
										id: Date.now(),
										userId: id,
										message: 'Hello',
									})
								)
							}
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
			<MessageInputField />
		</div>
	)
}

export default Chat
