import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { FcTodoList } from "react-icons/fc";
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
const Navbar = () => {
     const [isPages, setIsPages] = useState(false);   
     const [darkMode, setDarkMode] = useState(
      localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);
  
    
     const navOptions=
     <>
     <li><NavLink to="/">Home</NavLink></li>
    
     <li className='relative '
       onMouseEnter={() => setIsPages(true)} 
       onMouseLeave={() => setIsPages(false)}
     ><a className='flex items-center  justify-center gap-1'
     href="#"
     onClick={(e) => e.preventDefault()} 
   >
     <span>Made For</span> <IoIosArrowDown className='mt-1' />
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
    >Made For </NavLink></li>   
     </ul>
         )}
       </li>
       { <li><a href="/signup">SignUP</a></li>}
 </>                            
                              
   return (
  <div className="navbar max-w-screen-xl  bg-transparent fixed z-10 bg-opacity-30   md:px-10">
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
  <FcTodoList  className='text-2xl'/>
  <span className="text-3xl bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-[200%] bg-clip-text text-transparent animate-gradient">
    ToDoNest
  </span>
</Link>

        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
            <ul className="flex space-x-4">{navOptions}</ul>  
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
        {/* {user ? ( */}
        <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: darkMode ? "#333" : "#ddd",
        color: darkMode ? "#fff" : "#000",
        border: "none",
        cursor: "pointer",
       
      }}
    >
      {darkMode ? <MdDarkMode size={24} /> : <CiLight size={24} />}
    </button>
                <img
                    src={ "https://picsum.photos/150"}
                    alt="user"
                    className="w-10 ml-2 mr-1 h-10 rounded-full border"
                />
            {/* ) : <MdDarkMode /> null} */}
           
        </div>
    </div>
  );
};

export default Navbar;