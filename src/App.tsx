import './styles/App.scss'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import ChatPage from './pages/ChatPage/ChatPage'
import RequireAuth from './hoc/RequireAuth'
import SearchPage from './pages/SearhPage/SearchPage'
import Layout from './components/Layout'
import SettingPage from './pages/SettingPage/SettingPage'

function App() {
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
					<Route path={'chat/:username'} element={<ChatPage />} />
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
