import { FC, useState } from 'react'
import styles from './ChatPage.module.scss'
import Dialogs from '../../components/Dialogs/Dialogs'
import Chat from '../../components/Chat/Chat'
import { useParams } from 'react-router-dom'

const ChatPage: FC = () => {
	const params = useParams()
	const [zIndex, setZIndex] = useState(1)

	return (
		<div className={styles.chat_block}>
			<Dialogs setZIndex={setZIndex} />
			{params.hasOwnProperty('username') ? (
				<Chat zIndex={zIndex} setZIndex={setZIndex} />
			) : (
				<div className={styles.no_chat}>
					<h2>Choose who you would like to write to</h2>
				</div>
			)}
		</div>
	)
}

export default ChatPage
