import React from "react";

/**
 * Props for the MapPresentation component.
 * @typedef {object} MapPresentationProps
 * @property {string} title - The title of the slide.
 * @property {string} mapSrc - The URL source for the map iframe.
 * @property {string} content - The content or description of the slide.
 * @property {object} [customClasses] - Custom Tailwind CSS classes for the component elements.
 * @property {React.ReactNode[]} [buttons] - Optional array of button components to be displayed below the content.
 */

/**
 * MapPresentation is a React component that represents a presentation slide with a map iframe, title, content, and optional buttons.
 * @param {MapPresentationProps} props - The props for the MapPresentation component.
 * @returns {JSX.Element} - Returns the JSX element representing the map presentation slide.
 */

type MapPresentationProps = {
  title: string;
  mapSrc: string; // New property for the map iframe source
  content: string;
  customClasses?: {
    slideContainer?: string;
    textContainer?: string;
    title?: string;
    content?: string;
  };
  buttons?: React.ReactNode[];
};

const MapPresentation: React.FC<MapPresentationProps> = ({
  title,
  mapSrc, // Replace 'image' with 'mapSrc'
  content,
  customClasses = {},
  buttons,
}: MapPresentationProps) => {
  return (
    <div
      className={`flex flex-wrap justify-center items-center p-10 rounded-b-3xl relative -bottom-8 -mt-8 ${
        customClasses.slideContainer || ""
      }`}
    >
      <div className="w-full md:w-1/2 p-8 ">
        <iframe
          src={mapSrc} // Use the provided 'mapSrc' for the iframe source
          title="Map"
          className="w-full h-96 rounded-md shadow-lg"
        ></iframe>
      </div>
      <div
        className={`w-full md:w-1/2 flex flex-col p-8 ${
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

export default MapPresentation;
