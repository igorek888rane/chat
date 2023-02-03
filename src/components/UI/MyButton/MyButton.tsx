import React, { FC, PropsWithChildren, PointerEvent } from 'react'
import styles from './MyButton.module.scss'

interface ButtonProps {
	type: 'button' | 'submit' | 'reset' | undefined
	disabled?: boolean
	onClick?: (e: PointerEvent<HTMLButtonElement>) => void
}

const MyButton: FC<PropsWithChildren<ButtonProps>> = ({
	type,
	disabled,
	onClick,
	children,
}) => {
	return (
		<button
			className={styles.btn}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	)
}

export default MyButton
