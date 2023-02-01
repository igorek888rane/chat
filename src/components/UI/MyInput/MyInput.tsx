import React, { ChangeEvent, FC } from 'react'
import styles from './MyInput.module.scss'

interface MyInputProps {
	id: string
	name: string
	type: string
	label: string
	placeholder: string
	value: string
	onChange: (values: ChangeEvent<HTMLInputElement>) => void
}

const MyInput: FC<MyInputProps> = ({
	id,
	name,
	type,
	label,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				className={styles.input}
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</>
	)
}

export default MyInput
