import React, { FC } from 'react'
import styles from './MySelect.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp'
import { setActive } from '../../../store/seletcSlice/selectSlice'

interface selectProps {
	select: string[]
}

const MySelect: FC<selectProps> = ({ select }) => {
	const { active } = useAppSelector(state => state.select)
	const dispatch = useAppDispatch()
	return (
		<div className={styles.mySelect_block}>
			{select.map(el => (
				<div
					onClick={() => dispatch(setActive(el))}
					className={`${styles.select} ${active === el ? styles.active : ''} `}
				>
					<h1>{el}</h1>
				</div>
			))}
		</div>
	)
}

export default MySelect
