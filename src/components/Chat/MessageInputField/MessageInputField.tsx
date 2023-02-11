import { FC } from 'react'
import styles from './MessageInputField.module.scss'
import { IoSend } from 'react-icons/all'
import { useAppSelector } from '../../../hooks/useApp'
import { useFormik } from 'formik'
import MyTextArea from '../../UI/MyTextArea/MyTextArea'
import { IMessage } from '../../../services/MessagesService/MessageType'
import { useParams } from 'react-router-dom'

interface MessageInputFieldProps {
	handleSendMessage: (message: IMessage) => void
}

const MessageInputField: FC<MessageInputFieldProps> = ({
	handleSendMessage,
}) => {
	const { id } = useAppSelector(state => state.auth)
	const params = useParams()

	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			text: '',
		},
		onSubmit: values => {
			if (values.text) {
				handleSendMessage({
					text: values.text,
					userId: id,
					dialogId: String(params.dialogId),
				})
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
