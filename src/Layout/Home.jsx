import React from 'react';
import Banner from '../LandingPage/Banner';
import Features from '../LandingPage/Features';
import ProfileSetup from '../Component/Profile/ProfileSetUp';


const Home = () => {
 return (
   <div className=''>
      <Banner></Banner>  
      <Features></Features>   
        <ProfileSetup></ProfileSetup>                                                                          
  </div>
   );
};

export default Home;