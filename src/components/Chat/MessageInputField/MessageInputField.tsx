import { ChangeEvent, FC, useState } from 'react'
import styles from './MessageInputField.module.scss'
import { IoSend } from 'react-icons/all'
import { useAppSelector } from '../../../hooks/useApp'
import { messageType } from '../Chat'

interface MessageInputFieldProps {
	messages: messageType[]
	setMessages: (message: messageType[]) => void
}

const MessageInputField: FC<MessageInputFieldProps> = ({
														   setMessages,
														   messages,
													   }) => {
	const {id} = useAppSelector(state => state.auth)
	const [text, setText] = useState('')
	const handleSubmit = () => {
		if (text) {
			setMessages([
				...messages,
				{
					id: Date.now(),
					userId: id,
					message: text,
				},
			])
			setText('')

		}
	}
	const onKeyDownHandler = (e: any) => {
		if (e.shiftKey && e.code === 'Enter') {
			setText(text => text)
		} else if (e.code === 'Enter') {
			e.preventDefault()
			handleSubmit()
		}
	}
	return (
		<div className={styles.message_input_field}>
			<textarea
				onKeyDown={onKeyDownHandler}
				value={text}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setText(e.target.value)
				}
				placeholder={'Enter text message...'}
				accessKey={'a'}
			></textarea>
			<IoSend
				onClick={handleSubmit}
				className={styles.send_icon}
				size={35}
			/>
		</div>
	)
}

export default MessageInputField
