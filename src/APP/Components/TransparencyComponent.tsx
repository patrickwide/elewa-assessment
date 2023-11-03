// TransparencyComponent.tsx
import React from "react";

/**
 * Props for the TransparencyComponent.
 */
interface TransparencyProps {
  imageUrl: string;
  title: string;
  description: string;
}

/**
 * Reusable TransparencyComponent.
 * @param props - Component props.
 */
const TransparencyComponent: React.FC<TransparencyProps> = (props) => {
  return (
    <div className="bg-white p-24 flex flex-col justify-center items-center">
      <div className="text-black text-center md:px-20 lg:px-60">
        <div className="flex justify-center py-4">
          <img src={props.imageUrl} alt="" className="w-32 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold py-4">{props.title}</h1>
        <p className="text-2xl py-4">{props.description}</p>
      </div>
    </div>
  );
};

export default TransparencyComponent;
