import React from "react";

/**
 * Props for the CultureComponent.
 */
interface CultureProps {
  title: string;
  description: string;
}

/**
 * Reusable CultureComponent.
 * @param props - Component props.
 */
const CultureComponent: React.FC<CultureProps> = (props) => {
  return (
    <>
      <div className="bg-white flex items-center sm:px-2 md:px-8 p-16 ">
        <div className="text-balck text-center">
          <div className="text-left">
            <h1 className="text-6xl py-4 mb-4">{props.title}</h1>
            <p className="text-2xl py-4 md:w-3/4">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CultureComponent;
