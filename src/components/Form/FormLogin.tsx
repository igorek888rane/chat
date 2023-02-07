import { FC } from 'react'
import styles from './Form.module.scss'
import { useFormik } from 'formik'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import { validationSchema } from '../../utils/validationSchema'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useApp'
import { setIsAuth } from '../../store/authSlice/authSlice'

const FormLogin: FC = () => {
	const validate = validationSchema('login')
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
			password: '',
		},
		validationSchema: validate,
		onSubmit: values => {
			console.log(values)
			dispatch(setIsAuth(true))
			window.localStorage.setItem('auth', 'true')
			navigate('/')
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

export default FormLogin
