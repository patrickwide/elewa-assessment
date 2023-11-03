import React from "react";

/**
 * Props for the KeyFiguresComponent.
 */
interface KeyFiguresProps {
  data: {
    value: string;
    description: string;
  }[];
}

/**
 * Reusable KeyFiguresComponent.
 * @param props - Component props.
 */
const KeyFiguresComponent: React.FC<KeyFiguresProps> = (props) => {
  return (
    <div className="bg-white">
      <h1 className="text-6xl text-center">Key figures</h1>
      <div className="flex flex-wrap justify-center mt-8">
        {props.data.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/4 py-16 px-8 border rounded-3xl border-black"
          >
            <div className="text-4xl font-bold text-center py-2">
              {item.value}
            </div>
            <div className="text-lg text-center py-2">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFiguresComponent;
