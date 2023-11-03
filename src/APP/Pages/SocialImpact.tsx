import React from "react";

// components
import HeroComponent from "../Components/HeroComponent";
import PresentationSlide from "../Components/PresentationSlide";
import CTASection from "../Components/CTASections";
import Footer from "../Components/Footer";
import LogoCarousel from "../Components/LogoCarousel";

// data
import {
  pageData,
  heroData,
  ctaData,
  carouselData,
} from "../Data/socialImpact";
import { footerData } from "../Data";

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
      <LogoCarousel
        imageUrls={carouselData}
        title={"Some of our impact projects"}
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
interface SocialImpactProps {}

export default SocialImpact;
