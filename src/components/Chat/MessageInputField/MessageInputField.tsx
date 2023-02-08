import { FC } from 'react'
import styles from './MessageInputField.module.scss'
import { IoSend } from 'react-icons/all'
import { useAppSelector } from '../../../hooks/useApp'
import { messageType } from '../Chat'
import { useFormik } from 'formik'
import MyTextArea from '../../UI/MyTextArea/MyTextArea'

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

	return (
		<form onSubmit={handleSubmit} className={styles.message_input_field}>
			<MyTextArea
				text={values.text}
				rows={{ minRows: 2, maxRows: 6 }}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<button type={'submit'} className={styles.btn_submit}>
				<IoSend className={styles.send_icon} size={35} />
			</button>
		</form>
	)
}

export default MessageInputField
