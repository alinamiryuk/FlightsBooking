import './App.css'
import { useRoutes } from './routes'

function App() {
  const checkAuth = true
  const routes = useRoutes(checkAuth)

  return (<div className="app">{routes}</div>)
}

export default App
