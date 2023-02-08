import { ChangeEvent, FC, useState } from 'react'
import styles from './MyTextArea.module.scss'

interface MyTextAreaProps {
	text: string
	rows: { minRows: number; maxRows: number }
	handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	handleSubmit: () => void
}

const MyTextArea: FC<MyTextAreaProps> = ({
	text,
	rows,
	handleChange,
	handleSubmit,
}) => {
	const [rowValue, setRowValue] = useState<number>(rows.minRows)
	const onKeyDownHandler = (e: any) => {
		if (e.shiftKey && e.code === 'Enter') {
			if (rowValue >= rows.maxRows) {
				return
			}
			setRowValue(rows => rows + 1)
		} else if (e.code === 'Enter') {
			e.preventDefault()
			handleSubmit()
			setRowValue(rows.minRows)
		}
	}
	return (
		<textarea
			className={styles.textarea}
			rows={rowValue}
			id={'text'}
			name={'text'}
			onKeyDown={onKeyDownHandler}
			value={text}
			onChange={handleChange}
			placeholder={'Enter text message...'}
			accessKey={'a'}
		></textarea>
	)
}

export default MyTextArea
