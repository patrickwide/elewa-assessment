import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface ElewaButtonProps {
  label: string;
  onClick?: () => void;
}

/**
 * ElewaButton is a React component that represents a reusable rounded button with label, icon, and hover effect.
 * @param {ElewaButtonProps} props - The props for the ElewaButton component.
 * @returns {JSX.Element} - Returns the JSX element representing the button.
 */
const ElewaButton: React.FC<ElewaButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative rounded-full px-8 py-2 bg-black hover:bg-white transition-all duration-300 border border-black"
    >
      <span className="flex items-center justify-center space-x-2">
        <BsFillArrowRightCircleFill className="hidden opacity-0 group-hover:opacity-100 group-hover:block text-white group-hover:text-black transition-opacity duration-300" />
        <span className="text-white group-hover:text-black transition-colors duration-300">
          {label}
        </span>
        <BsFillArrowRightCircleFill className="opacity-100 group-hover:opacity-0 text-white group-hover:hidden transition-opacity duration-300" />
      </span>
    </button>
  );
};

export default ElewaButton;
