import { FC } from 'react'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
	return (
		<div className={'content'}>
			<div className={'app__content'}>
				<NavBar />
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
