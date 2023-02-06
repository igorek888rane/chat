import React, { FC, useRef, useState } from 'react'
import styles from './MyToggle.module.scss'

interface selectProps {
	toggleElements: string[]
	active: string
	setActive: (active: string) => void
}

const MyToggle: FC<selectProps> = ({ toggleElements, active, setActive }) => {
	const [left, setLeft] = useState<number>(0)
	const toggleRef = useRef<HTMLDivElement>(null)
	const toggleWidth = toggleRef.current?.offsetWidth

	const toggleHandler = (toggleValue: string) => {
		setActive(toggleValue)
		if (toggleWidth) {
			toggleValue === toggleElements[0]
				? setLeft(0)
				: setLeft(+toggleWidth)
		}
	}
	return (
		<div className={styles.myToggle_block}>
			<div className={styles.toggle}>
				{toggleElements.map(el => (
					<div
						ref={toggleRef}
						key={el}
						onClick={() => toggleHandler(el)}
						className={`${styles.toggle_el} ${
							active === el ? styles.active : ''
						} `}
					>
						<h1>{el}</h1>
					</div>
				))}
			</div>
			<div
				style={{ left, width: toggleWidth }}
				className={styles.myToggle_block__border}
			></div>
		</div>
	)
}

export default MyToggle
