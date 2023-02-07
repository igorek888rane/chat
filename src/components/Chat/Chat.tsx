import { ChangeEvent, FC, useState } from 'react'
import styles from './Chat.module.scss'
import { useParams } from 'react-router-dom'
import { IoSend } from 'react-icons/all'
import Message from './Message/Message'

const messages = [
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
		message:
			"Lorem ipsum — классический текст-«рыба». ' +\n" +
			"\t\t\t'Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», ' +\n" +
			"\t\t\t'написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду Макклинтоку.'",
	},
	{
		id: 7,
		userId: 2,
		message:
			'Lorem ipsum — классический текст-«рыба». ' +
			'Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», ' +
			'написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду Макклинтоку.',
	},
]
const Chat: FC = () => {
	const params = useParams()
	const [text, setText] = useState('')
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
			</div>
			<div className={styles.chat_text_send}>
				<textarea
					value={text}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
						setText(e.target.value)
					}
					placeholder={'Enter text message...'}
				></textarea>
				<IoSend className={styles.send_icon} size={35} />
			</div>
		</div>
	)
}

export default Chat
