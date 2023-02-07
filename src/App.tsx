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
					<Route
						path={''}
						element={
							<RequireAuth>
								<ChatPage />
							</RequireAuth>
						}
					/>
					<Route
						path={':username'}
						element={
							<RequireAuth>
								<ChatPage />
							</RequireAuth>
						}
					/>
					<Route
						path={'search'}
						element={
							<RequireAuth>
								<SearchPage />
							</RequireAuth>
						}
					/>
					<Route
						path={'settings'}
						element={
							<RequireAuth>
								<SettingPage />
							</RequireAuth>
						}
					/>
				</Route>
				<Route path={'*'} element={<div>Not Found</div>} />
			</Routes>
		</div>
	)
}

export default App
