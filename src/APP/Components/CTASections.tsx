import React from "react";

/**
 * A reusable Call to Action (CTA) section component.
 * @component
 */
const CTASection: React.FC<CTASectionProps> = ({ text, linkText, linkUrl }) => {
  return (
    <div className="bg-white p-32 flex flex-col justify-center items-center">
      <div className="text-black text-center md:px-20 lg:px-96">
        <p className="text-6xl">
          {text}{" "}
          <a href={linkUrl} className="text-black underline">
            {linkText}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

/**
 * Prop types for the CTASection component.
 * @interface
 */
interface CTASectionProps {
  /** The main text to display in the CTA section. */
  text: string;
  /** The text for the CTA link. */
  linkText: string;
  /** The URL to link to when the CTA is clicked. */
  linkUrl: string;
}

export default CTASection;
