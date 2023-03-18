import { Link, Outlet } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <nav>
        <h2>
          <Link to="/">MoviesLib</Link>
        </h2>
        <Link to="/Movie/1">Movie</Link>
        <Link to="/search">Search</Link>
      </nav>
      <h2>Movies lib</h2>
      <Outlet />
    </div>
  )
}

export default App
