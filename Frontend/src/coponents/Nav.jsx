
import { Link, NavLink, useRouteLoaderData } from 'react-router-dom'

const Nav = () => {
  const isToken = useRouteLoaderData("root");

  return (
    <nav className='nav-con'>
        <Link to="/">
        <h2>BLOG.io</h2>
        </Link>
        <div>
            <NavLink to="/">Post</NavLink>
            { isToken && <NavLink to="/create-post">Create Post</NavLink>}
            { !isToken && <NavLink to="/auth?mode=login">Login</NavLink>}
            { isToken && <NavLink to="/logout">Logout</NavLink>}
        </div>
    </nav>
  )
}

export default Nav