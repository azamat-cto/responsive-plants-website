import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../store/slices/drawerSlice.js'
import { Icons } from './icons.jsx'

export function CloseDrawer() {
  const dispatch = useDispatch()

  return (
    <button
      className="close-drawer"
      type="button"
      onClick={() => dispatch(toggleDrawer(false))}
    >
      <Icons.close />
    </button>
  )
}
