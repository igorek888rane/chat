import { FC, useEffect, useRef, useState } from 'react'
import styles from './AuthPage.module.scss'
import MyToggle from '../../components/UI/MyToggle/MyToggle'
import FormLogin from '../../components/Form/FormLogin'
import FormRegister from '../../components/Form/FormRegister'

const AuthPage: FC = () => {
	const formRef = useRef<HTMLDivElement>(null)
	const formWidth = formRef.current?.offsetWidth
		? formRef.current?.offsetWidth
		: 900

	const [active, setActive] = useState<string>('Sign in')
	const [left, setLeft] = useState<number>(-Number(formWidth) / 2)

	useEffect(() => {
		formWidth && active === 'Sign in' ? setLeft(0) : setLeft(-formWidth / 2)
	}, [active])

	return (
		<div className={'content'}>
			<div className={styles.auth_page}>
				<div className={styles.auth_block}>
					<h1 className={styles.auth_block__header}>Welcome</h1>
					<MyToggle
						toggleElements={['Sign in', 'Sign up']}
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
		</div>
	)
}

export default AuthPage
