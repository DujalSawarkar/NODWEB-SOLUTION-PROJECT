import React from "react";
import Hero from "../sections/Hero";
import ServiceOverview from "../sections/ServiceOverview";
import WhyNodWeb from "../sections/WhyNodWeb";
import OurProcess from "../sections/OurProcess";
import Technologies from "../sections/Technologies";
import CallToAction from "../sections/CallToAction";

function Home() {
  return(
    <>
    <Hero/>
    <ServiceOverview/>
    <WhyNodWeb/>
    <OurProcess/>
    <Technologies/>
    <CallToAction/>
    </>
  );
}

export default Home;
