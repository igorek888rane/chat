import { FC } from 'react'
import Nav from './Nav/Nav'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
	return (
		<div className={'content'}>
			<div className={'app__content'}>
				<Nav />
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
