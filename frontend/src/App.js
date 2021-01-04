import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { useRoutes } from './routes'

function App() {
  const checkAuth = true
  const routes = useRoutes(checkAuth)

  return (<BrowserRouter>{routes}</BrowserRouter>)
}

export default App
