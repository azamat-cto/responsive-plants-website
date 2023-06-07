import { Banner } from './components/banner.jsx'
import { Menu } from './components/drawer.jsx'
import { Footer } from './components/footer.jsx'
import { Header } from './components/header.jsx'

export function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Banner />
      </main>
      <Footer />
      <Menu />
    </div>
  )
}
