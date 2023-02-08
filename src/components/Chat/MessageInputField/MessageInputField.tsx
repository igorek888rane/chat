import { FC } from 'react'
import styles from './MessageInputField.module.scss'
import { IoSend } from 'react-icons/all'
import { useAppSelector } from '../../../hooks/useApp'
import { messageType } from '../Chat'
import { useFormik } from 'formik'

interface MessageInputFieldProps {
	messages: messageType[]
	setMessages: (message: messageType[]) => void
}

const MessageInputField: FC<MessageInputFieldProps> = ({
	setMessages,
	messages,
}) => {
	const { id } = useAppSelector(state => state.auth)
	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			text: '',
		},
		onSubmit: values => {
			if (values.text) {
				setMessages([
					...messages,
					{
						id: Date.now(),
						userId: id,
						message: values.text,
					},
				])
				values.text = ''
			}
		},
	})
	const onKeyDownHandler = (e: any) => {
		if (e.shiftKey && e.code === 'Enter') {
			return
		} else if (e.code === 'Enter') {
			e.preventDefault()
			handleSubmit()
		}
	}
	return (
		<form onSubmit={handleSubmit} className={styles.message_input_field}>
			<textarea
				id={'text'}
				name={'text'}
				onKeyDown={onKeyDownHandler}
				value={values.text}
				onChange={handleChange}
				placeholder={'Enter text message...'}
				accessKey={'a'}
			></textarea>
			<button className={styles.btn_submit}>
				<IoSend className={styles.send_icon} size={35} />
			</button>
		</form>
	)
}

export default MessageInputField
