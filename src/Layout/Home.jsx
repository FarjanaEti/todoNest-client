import React from 'react';
import Banner from '../LandingPage/Banner';
import Features from '../LandingPage/Features';
import ProfileSetup from '../Component/Profile/ProfileSetUp';
import UsageSelection from '../Component/Profile/UsagesSelection';


const Home = () => {
 return (
   <div className=''>
      <Banner></Banner>  
      <Features></Features>   
        <ProfileSetup></ProfileSetup>      
        <UsageSelection></UsageSelection>                                                                    
  </div>
   );
};

export default Home;