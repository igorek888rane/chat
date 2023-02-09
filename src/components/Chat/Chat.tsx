import { FC, useEffect, useRef } from 'react'
import styles from './Chat.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import Message from './Message/Message'
import MessageInputField from './MessageInputField/MessageInputField'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { setZIndex } from '../../store/zIndexSlice/zIndexSlice'

const Chat: FC = () => {
	const params = useParams()
	const intoViewRef = useRef<HTMLDivElement>(null)
	const { messages } = useAppSelector(state => state.messages)
	const { zIndex } = useAppSelector(state => state.zIndex)
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
					onClick={() => dispatch(setZIndex(1))}
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
			<MessageInputField />
		</div>
	)
}

export default Chat
