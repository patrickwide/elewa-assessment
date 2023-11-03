import React from "react";

// components
import HeroComponent from "../Components/HeroComponent";
import CTASection from "../Components/CTASections";
import Footer from "../Components/Footer";
import MapPresentation from "../Components/MapPresentation";
import TransparencyComponent from "../Components/TransparencyComponent";
import CultureComponent from "../Components/CultureComponent";
import MissionComponent from "../Components/MissionComponent";
import SolutionsComponent from "../Components/SolutionsComponent";
import ValuesComponent from "../Components/ValuesComponent";

// data
import {
  heroData,
  ctaData,
  mapSectionData,
  transparencyData,
  cultureData,
  missionData,
  solutionsData,
  valuesData,
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

      <MissionComponent
        title={missionData.title}
        desc1={missionData.desc1}
        desc2={missionData.desc2}
      />

      <SolutionsComponent items={solutionsData} />

      <CultureComponent
        title={cultureData.title}
        description={cultureData.description}
      />

      <ValuesComponent items={valuesData} />

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
      <Footer
        address={footerData.address}
        phone={footerData.phone}
        email={footerData.email}
        navigation={footerData.navigationLinks}
        brands={footerData.brands}
        privacy={footerData.privacy}
      />
    </div>
  );
};

// The interface for the props of the component
interface AboutProps {}

export default About;
