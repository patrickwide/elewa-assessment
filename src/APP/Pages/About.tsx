import React from "react";

// components
import HeroComponent from "../Components/HeroComponent";
import CTASection from "../Components/CTASections";
import Footer from "../Components/Footer";
import MapPresentation from "../Components/MapPresentation";
import TransparencyComponent from "../Components/TransparencyComponent";
import CultureComponent from "../Components/CultureComponent";

// data
import {
  heroData,
  ctaData,
  mapSectionData,
  transparencyData,
  cultureData,
} from "../Data/About";
import { footerData } from "../Data";

/**
 * A simple React component that renders a black placeholder.
 * @param props The props for the component.
 */
const About: React.FC<AboutProps> = (props) => {
  return (
    <div className="bg-black">
      <HeroComponent {...heroData} />

      <CultureComponent
        title={cultureData.title}
        description={cultureData.description}
      />

      <TransparencyComponent
        imageUrl={transparencyData.imageUrl}
        title={transparencyData.title}
        description={transparencyData.description}
      />

      <MapPresentation
        title={mapSectionData.title}
        content={mapSectionData.content}
        mapSrc={mapSectionData.image}
        customClasses={mapSectionData.customClasses}
      />
      <CTASection {...ctaData} />
      <Footer navigation={[]} {...footerData} />
    </div>
  );
};

// The interface for the props of the component
interface AboutProps {}

export default About;
