import Drawer from 'react-modern-drawer'
import { links } from '../constants/index.js'
import 'react-modern-drawer/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../store/slices/drawerSlice.js'
import { CloseDrawer } from './close-drawer.jsx'

export function Menu() {
  const { isOpen } = useSelector((state) => state.drawer)
  const dispatch = useDispatch()

  return (
    <div className="drawer">
      <Drawer
        className="drawer__nav"
        open={isOpen}
        onClose={() => dispatch(toggleDrawer(false))}
        direction="right"
        lockBackgroundScroll={true}
        size={'80vw'}
      >
        {links.length ? (
          <ul className="drawer__list">
            {links?.map((link) => (
              <li className="drawer__item" key={link.key}>
                <a
                  className="drawer__link"
                  href={link.url}
                  onClick={() => dispatch(toggleDrawer(false))}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        <CloseDrawer />
      </Drawer>
    </div>
  )
}
