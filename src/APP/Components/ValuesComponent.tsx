import React from "react";

/**
 * Props for the ValuesComponent.
 */
interface ValuesProps {
  items: {
    imageUrl: string;
    title: string;
    description: string;
  }[];
}

/**
 * Reusable ValuesComponent.
 * @param props - Component props.
 */
const ValuesComponent: React.FC<ValuesProps> = (props) => {
  return (
    <div className="flex flex-wrap p-8 bg-white">
      {props.items.map((item, index) => (
        <div key={index} className="w-full md:w-1/2 p-2">
          <div className="border border-black rounded p-4">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-32 rounded-lg"
            />
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-lg">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesComponent;
