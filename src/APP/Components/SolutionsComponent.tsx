import React from "react";

/**
 * Props for the SolutionsComponent.
 */
interface SolutionsProps {
  items: {
    imageUrl: string;
    title: string;
    description: string;
  }[];
}

/**
 * Reusable SolutionsComponent.
 * @param props - Component props.
 */
const SolutionsComponent: React.FC<SolutionsProps> = (props) => {
  return (
    <div className="flex flex-wrap bg-gray-200 p-8 rounded-b-3xl relative -bottom-8 -mt-8">
      {props.items.map((item, index) => (
        <div key={index} className="w-full md:w-1/3 p-4">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-18 pb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold py-4">{item.title}</h2>
          <p className="text-lg py-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SolutionsComponent;
