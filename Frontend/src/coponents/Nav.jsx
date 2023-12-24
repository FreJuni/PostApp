
import { Link, NavLink, useRouteLoaderData } from 'react-router-dom'
import {Bars3Icon} from "@heroicons/react/24/solid";
import { useEffect,useRef, useState } from 'react';

const Nav = () => {
  const isToken = useRouteLoaderData("root");
  const refContainer = useRef(null);
  const refCon = useRef(null);
  const [isTrue,setIsTrue] = useState(false);

  useEffect(() => {
    if(refContainer.current) {
      const height = refContainer.current.getBoundingClientRect().height;
      if(isTrue) {
        refCon.current.style.height = `${height}px`;
      } else {
        refCon.current.style.height = `0px`;
      }
    }
    
  }, [isTrue]);

  const stateHandler = () => {
    setIsTrue(!isTrue);
  }



  return (
    <div>
      <nav className='nav-con'>
            <div className='logo-con'>
            <Link to="/">
              <h2>BLOG.io</h2>
              </Link>
              <Bars3Icon onClick={stateHandler} className='ham-icon' />
            </div>
            <div className='link-container' ref={refCon}>
              <div className='link-con' ref={refContainer}>
                  <NavLink to="/" onClick={() => setIsTrue(false)}>Post</NavLink>
                  { isToken && <NavLink to="/create-post" onClick={() => setIsTrue(false)}>Create Post</NavLink>}
                  { !isToken && <NavLink to="/auth?mode=login" onClick={() => setIsTrue(false)}>Login</NavLink>}
                  { isToken && <NavLink to="/logout" onClick={() => setIsTrue(false)}>Logout</NavLink>}
              </div>
            </div>
          </nav>
    </div>
    
  )
}

export default Nav

