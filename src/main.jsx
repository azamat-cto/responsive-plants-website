import { ThemeProvider } from 'next-themes'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App.jsx'
import { store } from './store/store.js'
import './styles/main.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </Provider>
)
