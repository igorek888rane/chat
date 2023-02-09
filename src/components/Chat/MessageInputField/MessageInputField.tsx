import { FC } from 'react'
import styles from './MessageInputField.module.scss'
import { IoSend } from 'react-icons/all'
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp'
import { useFormik } from 'formik'
import MyTextArea from '../../UI/MyTextArea/MyTextArea'
import { setMessages } from '../../../store/messagesSlice/messagesSlice'

const MessageInputField: FC = () => {
	const { id } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()

	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			text: '',
		},
		onSubmit: values => {
			if (values.text) {
				console.log(values.text)
				dispatch(
					setMessages({
						id: Date.now(),
						userId: id,
						message: values.text,
					})
				)
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
