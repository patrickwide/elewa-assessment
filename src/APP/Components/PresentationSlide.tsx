import React from "react";

/**
 * Props for the PresentationSlide component.
 * @typedef {object} PresentationSlideProps
 * @property {string} title - The title of the slide.
 * @property {string} content - The content or description of the slide.
 * @property {string} [image] - Optional URL of an image to display on the slide.
 * @property {("left" | "right")} [imageSide="right"] - The side where the image should be displayed.
 * @property {object} [customClasses] - Custom Tailwind CSS classes for the component elements.
 * @property {React.ReactNode[]} [buttons] - Optional array of button components to be displayed below the content.
 */

/**
 * PresentationSlide is a React component that represents a presentation slide with title, content, an optional image, and optional buttons.
 * @param {PresentationSlideProps} props - The props for the PresentationSlide component.
 * @returns {JSX.Element} - Returns the JSX element representing the presentation slide.
 */

type PresentationSlideProps = {
  title: string;
  content: string;
  image?: string;
  imageSide?: "left" | "right";
  customClasses?: {
    slideContainer?: string;
    imageContainer?: string;
    image?: string;
    textContainer?: string;
    title?: string;
    content?: string;
  };
  buttons?: React.ReactNode[]; // New property for buttons
};

const PresentationSlide: React.FC<PresentationSlideProps> = ({
  title,
  content,
  image,
  imageSide,
  customClasses = {},
  buttons, // Add buttons to the destructuring
}: PresentationSlideProps) => {
  const imageContainerClass = imageSide === "left" ? "order-1" : "order-2";
  const textContainerClass = imageSide === "left" ? "order-2" : "order-1";

  return (
    <div
      className={`flex flex-wrap justify-center items-center p-10 rounded-b-3xl relative -bottom-8 -mt-8 ${
        customClasses.slideContainer || ""
      }`}
    >
      {image && (
        <div
          className={`p-8 ${imageContainerClass} ${
            customClasses.imageContainer || ""
          }`}
        >
          <img
            src={image}
            alt="Slide"
            className={`w-full max-h-100.5 rounded-md shadow-lg ${
              customClasses.image || ""
            }`}
          />
        </div>
      )}
      <div
        className={`w-full md:w-1/2 ${textContainerClass} flex flex-col p-8 ${
          customClasses.textContainer || ""
        }`}
      >
        <h2 className={`text-6xl font-bold mb-4 ${customClasses.title || ""}`}>
          {title}
        </h2>
        <p className={`text-3xl ${customClasses.content || ""}`}>
          {content.split("\n").map((paragraph, index) => (
            <p className="p-2" key={index}>
              {paragraph}
            </p>
          ))}
        </p>
        {/* Render optional buttons */}
        {buttons && buttons.length > 0 && (
          <div className="flex space-x-4 mt-4 p-2">
            {buttons.map((button, index) => (
              <div key={index}>{button}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PresentationSlide;
