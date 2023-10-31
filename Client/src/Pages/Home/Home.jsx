import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import "./Home.css";
import PropertyList from "../../Components/PropertyList/PropertyList";
import RatedProperty from "../../Components/RatedProperty/RatedProperty";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home_Container">
        <Featured />
      </div>
      
      <div className="propertyListContainer">
      <div className="homeHeadings">Home Guest Love</div>
        <PropertyList />
      </div>
      
      <div className="RatedProtertyListContainer">
      <div className="homeHeadings">The Best Properties</div>
        <RatedProperty />
      </div>
      <div>
        <MailList/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
