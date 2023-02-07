import { FC } from 'react'
import styles from './Message.module.scss'
import { useAppSelector } from '../../../hooks/useApp'

interface MessageProps {
	message: string
	userId: number
}

const Message: FC<MessageProps> = ({ message, userId }) => {
	const { id } = useAppSelector(state => state.auth)
	const classes = [styles.message_block]
	userId === id
		? classes.push(styles.message_recipient)
		: classes.push(styles.message_sender)

	return <div className={classes.join(' ')}>{message}</div>
}

export default Message
