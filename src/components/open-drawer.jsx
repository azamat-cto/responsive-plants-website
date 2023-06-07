import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../store/slices/drawerSlice.js'
import { Icons } from './icons.jsx'

export function OpenDrawer() {
  const dispatch = useDispatch()

  return (
    <button
      className="open-drawer"
      type="button"
      onClick={() => dispatch(toggleDrawer(true))}
    >
      <Icons.menu />
    </button>
  )
}
