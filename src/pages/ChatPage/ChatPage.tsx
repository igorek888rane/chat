import { FC } from 'react'
import styles from './ChatPage.module.scss'
import Dialogs from '../../components/Dialogs/Dialogs'
import Chat from '../../components/Chat/Chat'
import { useParams } from 'react-router-dom'

const ChatPage: FC = () => {
	const params = useParams()

	return (
		<div className={styles.chat_block}>
			<Dialogs />
			{params.hasOwnProperty('username') ? (
				<Chat />
			) : (
				<div className={styles.no_chat}>
					<h2>Choose who you would like to write to</h2>
				</div>
			)}
		</div>
	)
}

export default ChatPage
