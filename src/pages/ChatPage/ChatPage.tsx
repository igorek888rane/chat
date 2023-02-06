import { FC } from 'react'
import styles from './ChatPage.module.scss'
import Dialogs from '../../components/Dialogs/Dialogs'
import Chat from '../../components/Chat/Chat'

const ChatPage: FC = () => {
	return (
		<div className={styles.chat_block}>
			<Dialogs />
			<Chat />
		</div>
	)
}

export default ChatPage
