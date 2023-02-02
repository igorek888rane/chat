import React, { useEffect, useRef, useState } from 'react'
import styles from './AuthPage.module.scss'
import MySelect from '../../components/UI/MySelect/MySelect'
import FormLogin from '../../components/Form/FormLogin'
import FormRegister from '../../components/Form/FormRegister'

const AuthPage = () => {
	const formRef = useRef<HTMLDivElement>(null)
	const formWidth = formRef.current?.offsetWidth
		? formRef.current?.offsetWidth
		: 900

	const [active, setActive] = useState<string>('Sign In')
	const [left, setLeft] = useState<number>(-Number(formWidth) / 2)

	useEffect(() => {
		formWidth && !left ? setLeft(-formWidth / 2) : setLeft(0)
	}, [active])

	return (
		<div className={styles.auth_page}>
			<div className={styles.auth_block}>
				<h1 className={styles.auth_block__header}>Welcome</h1>
				<MySelect
					select={['Sign In', 'Sign Up']}
					active={active}
					setActive={setActive}
				/>
				<div className={styles.auth_block__form}>
					<div
						style={{ left }}
						className={styles.form_inner}
						ref={formRef}
					>
						<FormLogin />
						<FormRegister />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AuthPage
