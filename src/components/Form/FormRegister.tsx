import { FC } from 'react'
import styles from './Form.module.scss'
import { useFormik } from 'formik'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import { validationSchema } from '../../utils/validationSchema'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useApp'
import { setAuth } from '../../store/authSlice/AsyncThunk'

const FormRegister: FC = () => {
	const validate = validationSchema('register')
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const {
		handleSubmit,
		values,
		handleChange,
		handleBlur,
		errors,
		touched,
		isSubmitting,
	} = useFormik({
		initialValues: {
			email: '',
			username: '',
			password: '',
		},
		validationSchema: validate,
		onSubmit: values => {
			dispatch(
				setAuth({
					params: {
						email: values.email,
						username: values.username,
						password: values.password,
					},
					path: 'register',
				})
			)
			navigate('/chat')
		},
	})
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<MyInput
				id={'email'}
				name={'email'}
				type={'email'}
				label={'Email'}
				placeholder={'Enter your email'}
				value={values.email}
				errors={errors.email}
				touched={touched.email}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<MyInput
				id={'username'}
				name={'username'}
				type={'text'}
				label={'Username'}
				placeholder={'Enter your username'}
				value={values.username}
				errors={errors.username}
				touched={touched.username}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<MyInput
				id={'password'}
				name={'password'}
				type={'password'}
				label={'Password'}
				placeholder={'Enter your password'}
				value={values.password}
				errors={errors.password}
				touched={touched.password}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<div className={styles.form_btn}>
				<MyButton disabled={isSubmitting} type={'submit'}>
					SIGN OUT
				</MyButton>
			</div>
		</form>
	)
}

export default FormRegister
