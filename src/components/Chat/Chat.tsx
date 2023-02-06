import { FC } from 'react'
import styles from './Chat.module.scss'
import { useParams } from 'react-router-dom'
import { IoSend } from 'react-icons/all'

const Chat: FC = () => {
	const params = useParams()
	return (
		<div className={styles.chat_block}>
			<div className={styles.header}>
				<h1>{params.username}</h1>
			</div>
			<div className={styles.chat_area}></div>
			<div className={styles.chat_text_send}>
				<textarea></textarea>
				<IoSend className={styles.send_icon} size={35} />
			</div>
		</div>
	)
}

export default Chat
