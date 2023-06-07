import { Logo } from './logo.jsx'
import { Navbar } from './navbar.jsx'
import { OpenDrawer } from './open-drawer.jsx'
import { ThemeToggle } from './theme-toggle.jsx'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <Logo />
          <Navbar />
          <div className="header__action">
            <ThemeToggle />
            <OpenDrawer />
          </div>
        </div>
      </div>
    </header>
  )
}
