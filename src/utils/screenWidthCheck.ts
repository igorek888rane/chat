import { setZIndex } from '../store/zIndexSlice/zIndexSlice'
import { AppDispatch } from '../store/store'

export const screenWidthCheck = (zIndex: number, dispatch: AppDispatch) => {
	const screenWidth = window.screen.width
	if (screenWidth < 577) {
		dispatch(setZIndex(zIndex))
	}
	return
}
