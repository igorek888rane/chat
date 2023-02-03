import React from 'react'
import { useAppDispatch } from '../../hooks/useApp'
import { setIsAuth } from '../../store/authSlice/authSlice'

const ChatPage = () => {
	const dispatch = useAppDispatch()
	const logOut = () => {
		window.localStorage.removeItem('auth')
		dispatch(setIsAuth(false))
	}
	return (
		<div>
			<button onClick={logOut} type={'button'}>
				logOut
			</button>
		</div>
	)
}

export default ChatPage
