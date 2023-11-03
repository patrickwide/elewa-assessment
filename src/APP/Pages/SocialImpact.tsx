import React from "react";

// components
import HeroComponent from "../Components/HeroComponent";
import PresentationSlide from "../Components/PresentationSlide";
import CTASection from "../Components/CTASections";
import Footer from "../Components/Footer";

// data
import { pageData, heroData } from "../Data/socialImpact";
import { footerData } from "../Data";
import { ctaData } from "../Data/socialImpact";
/**
 * A simple React component that renders a black placeholder.
 * @param props The props for the component.
 */
const SocialImpact: React.FC<SocialImpactProps> = (props) => {
  return (
    <div className="bg-black">
      <HeroComponent
        backgroundImageUrl={heroData.backgroundImageUrl}
        logoUrl={heroData.logoUrl}
        logoLinkUrl={heroData.logoLinkUrl}
        navigationLinks={heroData.navigationLinks}
        title={heroData.title}
        subtitle={heroData.subtitle}
      />

      {pageData.map((data, index) => (
        <PresentationSlide
          key={index}
          title={data.title}
          content={data.content}
          image={data.image}
          imageSide={data.imageSide as "left" | "right" | undefined}
          customClasses={data.customClasses}
        />
      ))}
      <CTASection {...ctaData} />
      <Footer {...footerData} />
    </div>
  );
};

// The interface for the props of the component
interface SocialImpactProps {}

export default SocialImpact;
