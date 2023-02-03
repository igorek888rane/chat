import React, { FC, PropsWithChildren } from 'react'
import styles from './MyButton.module.scss'

interface ButtonProps {
	type: 'button' | 'submit' | 'reset' | undefined
	disabled?: boolean
}

const MyButton: FC<PropsWithChildren<ButtonProps>> = ({
	type,
	disabled,
	children,
}) => {
	return (
		<button className={styles.btn} disabled={disabled} type={type}>
			{children}
		</button>
	)
}

export default MyButton
