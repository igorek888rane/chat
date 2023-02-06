import { FC } from 'react'
import styles from './Chat.module.scss'
import { useParams } from 'react-router-dom'

const Chat: FC = () => {
	const params = useParams()
	return (
		<div className={styles.chat_block}>
			<div className={styles.header}>{params.username}</div>
		</div>
	)
}

export default Chat
