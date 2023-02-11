import './styles/App.scss'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import ChatPage from './pages/ChatPage/ChatPage'
import RequireAuth from './hoc/RequireAuth'
import SearchPage from './pages/SearhPage/SearchPage'
import Layout from './components/Layout'
import SettingPage from './pages/SettingPage/SettingPage'
import { useAppDispatch, useAppSelector } from './hooks/useApp'
import { useEffect } from 'react'
import { getMe } from './store/authSlice/AsyncThunk'

function App() {
	const dispatch = useAppDispatch()
	const { loading } = useAppSelector(state => state.auth)
	const navigate = useNavigate()
	const location = useLocation()
	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(getMe())
			if (location.pathname !== 'auth') {
				navigate(`${location.pathname}`)
			}
		}
	}, [])
	if (loading) {
		return <h1>Loading...</h1>
	}

	return (
		<div className='App'>
			<Routes>
				<Route path={'/auth'} element={<AuthPage />} />
				<Route
					path={'/'}
					element={
						<RequireAuth>
							<Layout />
						</RequireAuth>
					}
				>
					<Route path={'chat'} element={<ChatPage />} />
					<Route path={''} element={<ChatPage />} />
					<Route path={'chat/:dialogId'} element={<ChatPage />} />
					<Route path={'search'} element={<SearchPage />} />
					<Route path={'settings'} element={<SettingPage />} />
				</Route>
				<Route
					path={'*'}
					element={
						<RequireAuth>
							<div>Not Found</div>
						</RequireAuth>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
