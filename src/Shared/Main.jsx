import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Main = () => {
  return (
  <div className="w-full overflow-hidden">
          <Navbar></Navbar>
          <div className="pt-16 px-5 overflow-hidden">
            <Outlet></Outlet>
          </div>
        </div>
 );
};

export default Main;