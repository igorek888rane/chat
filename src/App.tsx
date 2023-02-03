import './styles/App.scss'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import ChatPage from './pages/ChatPage/ChatPage'
import RequireAuth from './hoc/RequireAuth'
import SearchPage from './pages/SearhPage/SearchPage'
import Layout from './components/Layout'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path={'/login'} element={<AuthPage />} />
				<Route path={'/'} element={<Layout />}>
					<Route
						path={'chat'}
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
				</Route>
				<Route path={'*'} element={<div>Not Found</div>} />
			</Routes>
		</div>
	)
}

export default App
