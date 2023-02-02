import React, { FC, useState } from 'react'
import styles from './MySelect.module.scss'

interface selectProps {
	select: string[]
	active: string
	setActive: (active: string) => void
}

const MySelect: FC<selectProps> = ({ select, active, setActive }) => {
	const [left, setLeft] = useState<number>(0)
	const selected = (select: string) => {
		setActive(select)
		left ? setLeft(0) : setLeft(100)
	}
	return (
		<div className={styles.mySelect_block}>
			<div className={styles.selects}>
				{select.map(el => (
					<div
						key={el}
						onClick={() => selected(el)}
						className={`${styles.select} ${
							active === el ? styles.active : ''
						} `}
					>
						<h1>{el}</h1>
					</div>
				))}
			</div>
			<div
				style={{ left }}
				className={styles.mySelect_block__border}
			></div>
		</div>
	)
}

export default MySelect
