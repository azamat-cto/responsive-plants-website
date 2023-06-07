import { links } from '../constants/index.js'

export function Navbar() {
  return (
    <>
      {links.length ? (
        <nav className="nav">
          <ul className="nav__list">
            {links?.map((link) => (
              <li className="nav__item" key={link.key}>
                <a className="nav__link" href={link.url}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  )
}
