import { ChangeEvent, FocusEvent, FC } from 'react'
import styles from './MyInput.module.scss'

interface MyInputProps {
	id: string
	name: string
	type: string
	label: string
	placeholder: string
	value: string
	errors?: string
	touched?: boolean
	onChange: (values: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const MyInput: FC<MyInputProps> = ({
	id,
	name,
	type,
	label,
	placeholder,
	value,
	errors,
	touched,
	onChange,
	onBlur,
}) => {
	return (
		<div className={styles.input_block}>
			<label className={styles.label} htmlFor={name}>
				{label}
			</label>
			<input
				className={`${styles.input} ${
					touched && errors ? styles.errorInput : ''
				}`}
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			<div
				style={touched && errors ? { opacity: '1' } : { opacity: '0' }}
				className={styles.error}
			>
				{touched && errors}
			</div>
		</div>
	)
}

export default MyInput
