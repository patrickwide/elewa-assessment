import React from "react";

/**
 * Props for the DiverseComponent.
 */
interface DiverseProps {
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * Reusable DiverseComponent.
 * @param props - Component props.
 */
const DiverseComponent: React.FC<DiverseProps> = (props) => {
  return (
    <div className="bg-white p-8 md:p-32 flex flex-col justify-center items-center ">
      <div className="text-black md:p-16">
        <h1 className="text-4xl font-bold py-4">{props.title}</h1>
        <p className="text-2xl py-4">{props.description}</p>
      </div>
      <div className="py-4">
        <img src={props.imageUrl} alt="" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default DiverseComponent;
