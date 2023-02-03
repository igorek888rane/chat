import * as yup from 'yup'

type schemaType = 'login' | 'register'
export const validationSchema = (schema: schemaType) => {
	if (schema === 'login') {
		return yup.object().shape({
			phoneNumber: yup
				.number()
				.typeError('Должно быть число')
				.min(1, 'Не может быть меньше 1 ')
				.required('Обязательное поле'),
			password: yup
				.string()
				.min(8, 'Минимум 8 символов')
				.required('Обязательное поле'),
		})
	} else if (schema === 'register') {
		return yup.object().shape({
			phoneNumber: yup
				.number()
				.typeError('Должно быть число')
				.min(1, 'Не может быть меньше 1 ')
				.required('Обязательное поле'),
			userName: yup
				.string()
				.min(5, 'Минимум 5 символов')
				.required('Обязательное поле'),
			password: yup
				.string()
				.min(8, 'Минимум 8 символов')
				.required('Обязательное поле'),
		})
	}
}
