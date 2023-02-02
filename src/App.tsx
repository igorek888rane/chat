import './styles/App.scss'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import ChatPage from './pages/ChatPage/ChatPage'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path={'/login'} element={<AuthPage />} />
				<Route path={'/chat'} element={<ChatPage />} />
				<Route path={'*'} element={<AuthPage />} />
			</Routes>
		</div>
	)
}

export default App
