import React, { FC } from 'react'
import styles from './Form.module.scss'
import { useFormik } from 'formik'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'

const FormRegister: FC = () => {
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: {
			phoneNumber: '',
			userName: '',
			password: '',
		},
		onSubmit: values => {
			console.log(values)
		},
	})
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<MyInput
				id={'phoneNumber'}
				name={'phoneNumber'}
				type={'text'}
				label={'Phone Number'}
				placeholder={'Enter your number'}
				value={values.phoneNumber}
				onChange={handleChange}
			/>
			<MyInput
				id={'userName'}
				name={'userName'}
				type={'text'}
				label={'Username'}
				placeholder={'Enter your username'}
				value={values.userName}
				onChange={handleChange}
			/>
			<MyInput
				id={'password'}
				name={'password'}
				type={'password'}
				label={'Password'}
				placeholder={'Enter your password'}
				value={values.password}
				onChange={handleChange}
			/>
			<MyButton type={'submit'}>Send</MyButton>
		</form>
	)
}

export default FormRegister
