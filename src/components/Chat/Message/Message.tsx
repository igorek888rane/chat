import { FC } from 'react'
import styles from './Message.module.scss'
import { useAppSelector } from '../../../hooks/useApp'

interface MessageProps {
	message: string
	userId: string
}

const Message: FC<MessageProps> = ({ message, userId }) => {
	const { id } = useAppSelector(state => state.auth)
	const classes = [styles.message_block]
	userId === id
		? classes.push(styles.message_recipient)
		: classes.push(styles.message_sender)

	return <p className={classes.join(' ')}>{message}</p>
}

export default Message
