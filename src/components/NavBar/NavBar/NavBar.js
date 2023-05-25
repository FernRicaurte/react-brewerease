import './NavBar.css'

import {Link} from 'react-router-dom'

export default function NavBar({user, setUser}) {


  return (
    <nav className='top-nav'>
      <Link to='/'>
        <button className='nav-button'>Home</button>
      </Link>
      <Link to='/florida'>
        <button className='nav-button'>Florida</button>
      </Link>
      <Link to='/new_york'>
        <button className='nav-button'>New York</button>
      </Link>
    </nav>
  )
}
