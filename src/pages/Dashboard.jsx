import React from "react";
import Logo from "../assets/images/Logo.png"
import Navbar from "../Components/Layouts/Navbar";
import Jumbotron from "../Components/Jumbotron/Jumbotron";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <Jumbotron/>
      {/* About us */}
      <div className="bg-white flex items-center justify-center px-[95px] max-md:px-[30px] py-[145px]">
        <div className="w-full h-[520px] bg-white border border-black relative">
          <h1>About us</h1>
            <div className="after:w-[130px] after:h-[130px] after:bg-white after:border-l after:border-black after:absolute after:-right-[65px] after:-bottom-[65px] after:rotate-45   before:w-[130px] before:h-[130px] before:bg-white before:absolute before:-left-[65px] before:-top-[65px] before:rotate-45 before:border-r before:border-black">
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
