import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
     const [isPages, setIsPages] = useState(false);                          
     const navOptions=
     <>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/auth/deals">Deals</NavLink></li>
     <li className='relative'
       onMouseEnter={() => setIsPages(true)} 
       onMouseLeave={() => setIsPages(false)}
     ><a
     href="#"
     onClick={(e) => e.preventDefault()} // **Prevent default navigation**
   >
     Pages
   </a>
    {isPages && (
   <ul className="absolute z-10 left-0 mt-8 w-48 bg-white shadow-lg rounded-lg">
    <li><NavLink to="/auth/faqs#faqs"  className={({ isActive }) =>
       isActive ? 'text-green-400 bg-transparent' : 'text-black bg-transparent'
     }
    >FAQs</NavLink></li>
    <li><NavLink to='/auth/faqs#about'  className={({ isActive }) =>
       isActive ? 'text-green-400 bg-transparent' : 'text-black bg-transparent'
     }
    >About Us</NavLink></li>
    <li><NavLink to="/auth/faqs#contact" className={({ isActive }) =>
       isActive ? 'text-green-400 bg-transparent' : 'text-black bg-transparent'
     }
    >Contact Us</NavLink></li>
    <li><NavLink  className={({ isActive }) =>
       isActive ? 'text-green-400 bg-transparent' : 'text-black bg-transparent'
     }
    >Blogs</NavLink></li>
    <li><NavLink to='/category' className={({ isActive }) =>
       isActive ? 'text-green-400 bg-transparent' : 'text-black bg-transparent'
     }
    >Pages</NavLink></li>   
     </ul>
         )}
       </li>
       { <li><a href="/profile">My Profile</a></li>}
 </>                            
                              
   return (
  <div className="navbar max-w-screen-xl rounded-3xl bg-transparent fixed z-10 bg-opacity-30  shadow-sm md:px-10">
        {/* Navbar Start */}
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-300 rounded-box w-52">
                    {navOptions}
                </ul>
            </div>
            <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                
                <span className=" text-3xl">Earnify</span>
            </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
            <ul className="flex space-x-4">{navOptions}</ul>  
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
        {/* {user ? ( */}
                <img
                    src={ "https://picsum.photos/150"}
                    alt="user"
                    className="w-10 mr-1 h-10 rounded-full border"
                />
            {/* ) : null} */}
            <Link className="btn-ghost mr-2" to={'https://github.com/'}>Join as Developer</Link>
        </div>
    </div>
  );
};

export default Navbar;