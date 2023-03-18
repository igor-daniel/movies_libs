import { Link, Outlet } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <nav>
        <h2><Link to="/">Home</Link></h2>

        <Link to="/Movie/1">Movies</Link>
        <Link to="/search">Search</Link>
      </nav>
      <p>Movies_lib</p>
      <Outlet />
    </div>
  )
}

export default App
