import React from "react";

// components
import HeroComponent from "../Components/HeroComponent";
import CTASection from "../Components/CTASections";
import PresentationSlide from "../Components/PresentationSlide";
import Footer from "../Components/Footer";
import ElewaButton from "../Components/ElewaButton";

// data
import { heroData, ctaData, pageData } from "../Data/Invest";
import { footerData } from "../Data";

/**
 * A simple React component that renders a black placeholder.
 * @param props The props for the component.
 */
const Invest: React.FC<InvestProps> = (props) => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="bg-black">
      <HeroComponent {...heroData} />
      {pageData.map((data, index) => (
        <PresentationSlide
          key={index}
          title={data.title}
          content={data.content}
          image={data.image}
          imageSide={data.imageSide as "left" | "right" | undefined}
          customClasses={data.customClasses}
          buttons={data.buttons?.map((button, index) => (
            <ElewaButton
              key={index}
              onClick={button.onClick}
              label={"Click Me"}
            />
          ))}
        />
      ))}

      <CTASection {...ctaData} />
      <Footer navigation={[]} {...footerData} />
    </div>
  );
};

// The interface for the props of the component
interface InvestProps {}

export default Invest;
