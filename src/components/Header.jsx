import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const active = {
   fontWeigth: 'bold',
   textDecoration: 'underline',
};

const Header = () => {
   return (
      <header>
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
               <Link 
                  className='navbar-brand'
                  to={'/'}>birusha</Link>

               <button className='navbar-toggler' type='button'
               data-bs-toggle="collapse"
               data-bs-target="#navmenu">
                  <span className='navbar-toggler-icon'></span>
               </button>
               
               <div className="collapse navbar-collapse" id='navmenu'>
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item">
                        <NavLink 
                           className='nav-link'
                           to={'/'}
                           style={({ isActive}) => isActive ? active : null}>Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink 
                           className={'nav-link'} 
                           to={'/about'}
                           style={({ isActive }) => ( isActive ? active : null) }>About</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink 
                           className={'nav-link'} 
                           to={'/services'}
                           style={({isActive}) => isActive ? active : null}>Services</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink 
                           className={'nav-link'} 
                           to={'/contact'}
                           style={({ isActive}) => isActive ? active : null }>Contact Me</NavLink>
                     </li>
                  </ul>
               </div>
            </div> 
         </nav>
      </header>
   );
};

export default Header;
