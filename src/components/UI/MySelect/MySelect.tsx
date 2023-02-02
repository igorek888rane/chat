import React, { FC, useRef, useState } from 'react'
import styles from './MySelect.module.scss'

interface selectProps {
	select: string[]
	active: string
	setActive: (active: string) => void
}

const MySelect: FC<selectProps> = ({ select, active, setActive }) => {
	const [left, setLeft] = useState<number>(0)
	const selectRef = useRef<HTMLDivElement>(null)
	const selectWidth = selectRef.current?.offsetWidth

	const selected = (select: string) => {
		setActive(select)
		if (!selectWidth) {
			return
		}
		left ? setLeft(0) : setLeft(+selectWidth)
	}
	return (
		<div className={styles.mySelect_block}>
			<div className={styles.selects}>
				{select.map(el => (
					<div
						ref={selectRef}
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
				style={{ left, width: selectWidth }}
				className={styles.mySelect_block__border}
			></div>
		</div>
	)
}

export default MySelect
