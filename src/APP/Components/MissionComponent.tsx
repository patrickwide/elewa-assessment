import React from "react";

/**
 * Props for the MissionComponent.
 */
interface MissionProps {
  title: string;
  desc1: string;
  desc2: string;
}

/**
 * Reusable MissionComponent.
 * @param props - Component props.
 */
const MissionComponent: React.FC<MissionProps> = (props) => {
  return (
    <div className="w-full p-8 bg-gray-200">
      <h1 className="text-6xl font-bold md:pl-8">{props.title}</h1>
      <div className="flex flex-row">
        <div className="w-1/2 p-8">
          <p className="text-3xl">{props.desc1}</p>
        </div>
        <div className="w-1/2 p-8">
          <p className="text-3xl">{props.desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
