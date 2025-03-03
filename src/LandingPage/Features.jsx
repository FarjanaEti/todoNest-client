import React from "react";
import { motion } from "framer-motion"; 
const Features = () => {
  return (
    <section
      className="flex  justify-center items-center py-20 px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/MyJ3FQfD/f-3.jpg')",
        backgroundSize: "cover",
        
      }}
    >
      <div className="flex justify-between items-stretch max-w-6xl w-full">
        {/* First Quote Section */}
        <div className="text-center px-6">
          <p className="text-xl font-semibold">
            “The best to-do list app on the market”
          </p>
          <hr className="my-4 border-t-2 border-[#8B9DC0] w-20 mx-auto" />
          <motion.div
            className="flex justify-center mt-4"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img
              src="https://i.ibb.co/MyJ3FQfD/f-3.jpg"
              alt="Logo"
              className="w-12 h-12"
            />
          </motion.div>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-auto bg-red-900 mx-6"></div>

        {/* Second Quote Section */}
        <div className="text-center px-6">
          <p className="text-xl font-semibold ">
            “Stay organized and achieve more daily”
          </p>
          <hr className="my-4 border-t-2 border-[#8B9DC0] w-20 mx-auto" />
          <motion.div
            className="flex justify-center mt-4"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img
              src="https://www.example.com/your-logo.png"
              alt="Logo"
              className="w-12 h-12"
            />
          </motion.div>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-auto bg-red-900 mx-6"></div>

        {/* Third Quote Section */}
        <div className="text-center px-6">
          <p className="text-xl font-semibold ">
            “Your productivity companion!”
          </p>
          <hr className="my-4 border-t-2 border-[#8B9DC0] w-20 mx-auto" />
          <motion.div
            className="flex justify-center mt-4"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img
              src="https://www.example.com/your-logo.png"
              alt="Logo"
              className="w-12 h-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
