import { FC } from 'react'
import styles from './Form.module.scss'
import { useFormik } from 'formik'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import { validationSchema } from '../../utils/validationSchema'
import { useNavigate } from 'react-router-dom'
import { setIsAuth } from '../../store/authSlice/authSlice'
import { useAppDispatch } from '../../hooks/useApp'

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
			phoneNumber: '',
			userName: '',
			password: '',
		},
		validationSchema: validate,
		onSubmit: values => {
			console.log(values)
			dispatch(setIsAuth(true))
			window.localStorage.setItem('auth', 'true')
			navigate('/chat')
		},
	})
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<MyInput
				id={'phoneNumber'}
				name={'phoneNumber'}
				type={'tel'}
				label={'Phone Number'}
				placeholder={'Enter your number'}
				value={values.phoneNumber}
				errors={errors.phoneNumber}
				touched={touched.phoneNumber}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<MyInput
				id={'userName'}
				name={'userName'}
				type={'text'}
				label={'Username'}
				placeholder={'Enter your username'}
				value={values.userName}
				errors={errors.userName}
				touched={touched.userName}
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
					Send
				</MyButton>
			</div>
		</form>
	)
}

export default FormRegister
