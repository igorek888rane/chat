import React, { FC, PropsWithChildren } from 'react'
import styles from './MyButton.module.scss'

interface ButtonProps {
	type: 'button' | 'submit' | 'reset' | undefined
}

const MyButton: FC<PropsWithChildren<ButtonProps>> = ({ type, children }) => {
	return (
		<button className={styles.btn} type={type}>
			{children}
		</button>
	)
}

export default MyButton
