import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app">
      <Outlet />
    </div>
  )
}

export default App
