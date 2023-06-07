import { Icons } from './icons.jsx'

export function Logo() {
  return (
    <div className="logo">
      <a className="logo__link" href="/">
        <Icons.logo className="logo__icon" />
        <span className="logo__text">Plantex</span>
      </a>
    </div>
  )
}
