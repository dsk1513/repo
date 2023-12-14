// pages/index.js or your other page/component file
import React from "react";
import Hero from "../components/Hero";
import Cards from "@/components/Cards";
import AboutUs from "@/components/AboutUs";


const HomePage = () => {
  return (
    <div>
      <Hero
        backgroundImage="/images/PIZZA.jpeg"
        title={<><span>HOT AND CHEESY</span><br /><span>PIZZA</span></>}
        subtitle="50% OFF 🌟🍕"
      />
      {/* Your other page content goes here */}
      <br />
      <br />
	  <center>ALWAYS HOT, ALWAYS GOOD, ALWAYS RIGHT</center>
      <Cards/>
	  <br />
	  <br />
	  <br />
	  <br />
	  <br />
	 <AboutUs/>

    </div>
  );
};

export default HomePage;
