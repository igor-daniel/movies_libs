import { Outlet } from 'react-router-dom'
import { Navbar } from './Components/Navbar'

import './index.css'


function App() {


  return (
    <div className="App">
      <Navbar />

      <p>Movies_lib</p>
      <Outlet />
    </div>
  )
}

export default App
