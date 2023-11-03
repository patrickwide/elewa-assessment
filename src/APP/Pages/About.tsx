import React from "react";

// components
import HeroComponent from "../Components/HeroComponent";
import CTASection from "../Components/CTASections";
import Footer from "../Components/Footer";

import { heroData, ctaData } from "../Data/About";
import { footerData } from "../Data";
/**
 * A simple React component that renders a black placeholder.
 * @param props The props for the component.
 */
const About: React.FC<AboutProps> = (props) => {
  return (
    <div className="bg-black">
      <HeroComponent {...heroData} />
      <CTASection {...ctaData} />
      <Footer navigation={[]} {...footerData} />
    </div>
  );
};

// The interface for the props of the component
interface AboutProps {}

export default About;
