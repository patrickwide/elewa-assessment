import React from "react";
import DefaultLogo from "./../Assets/Logo/Logo_White_arvoyx.svg"; // Import the default logo
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

interface HeroComponentProps {
  backgroundImageUrl: string;
  logoUrl: string;
  logoLinkUrl: string;
  navigationLinks: { to: string; name: string }[];
  title: string;
  subtitle: string;
}

/**
 * A Hero Component with background image, text, navigation links, and a logo.
 *
 * @component
 * @param {HeroComponentProps} props - The properties for the HeroComponent.
 * @returns {React.ReactElement} The HeroComponent.
 */
const HeroComponent: React.FC<HeroComponentProps> = (props) => {
  // Use the imported default logo if logoUrl is not provided
  const logoUrl = props.logoUrl || DefaultLogo;

  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div
        className="bg-cover bg-center h-full"
        style={{
          backgroundImage: `url("${props.backgroundImageUrl}")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="absolute inset-0 flex items-top px-8 h-20 justify-between mx-8 border-b-2">
        <div className="text-white flex items-center">
          <div className="">
            <a
              href={props.logoLinkUrl}
              className="text-xl sm:text-lg text-blue-500"
            >
              <img src={logoUrl} alt="Logo" />
            </a>
          </div>
        </div>
        <div className="text-white flex items-center">
          <div className="hidden md:flex">
            {props.navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-xl text-white mx-8"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <GiHamburgerMenu className="m-1 block md:hidden text-2xl" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center sm:px-2 md:px-8">
        <div className="text-white text-center">
          {/* Text on the left */}
          <div className="text-left">
            <h1 className="text-2xl mb-4">{props.title}</h1>
            <p className="text-6xl font-bold md:w-3/4">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
