import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

export const Navbar = () => {
  return (
    <nav>
      <h2>
        <Link to="/"> <BiCameraMovie /> MoviesLib </Link>
      </h2>
      <form>
        <input type="text" placeholder='busque um filme' />
        <button type='submit'> <BiSearchAlt2 /></button>
      </form>

      <Link to="/Movie/1">Movies</Link>
      <Link to="/search">Search</Link>
    </nav>
  )
}