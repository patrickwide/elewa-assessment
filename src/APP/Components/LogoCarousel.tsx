import React from "react";

/**
 * Props for the LogoCarousel component.
 * @param {string[]} imageUrls - An array of image URLs to be displayed in the carousel.
 * @param {string} title - The title to be displayed in the carousel.
 */
interface LogoCarouselProps {
  imageUrls: string[];
  title: string; // Add a title prop
}

/**
 * LogoCarousel component that displays a carousel of logos.
 * @param {LogoCarouselProps} props - The component's props.
 */
const LogoCarousel: React.FC<LogoCarouselProps> = ({ imageUrls, title }) => {
  return (
    <div className="flex flex-col justify-center bg-white overflow-hidden py-16">
      <div className="py-4 text-4xl">
        <h1 className="text-black text-center">{title}</h1>{" "}
        {/* Use the title prop */}
      </div>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center">
          {/* Logo Carousel animation */}
          <div
            x-data="{}"
            x-init="$nextTick(() => {
              let ul = $refs.logos;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {imageUrls.map((imageUrl, index) => (
                <li
                  key={index}
                  className="w-12 h-12 md:w-48 md:h-w-48" // Adjust width and height as needed
                >
                  <img
                    src={imageUrl}
                    alt={`Logo ${index}`}
                    className="w-full h-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
