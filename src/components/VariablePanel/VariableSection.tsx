import React, { useState } from "react";
import { Chevrron } from "@/components/Icons";

interface VariableSectionProps {
  title: string;
}

const VariableSection: React.FC<VariableSectionProps> = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border-primary rounded-md bg-bg-primary-light text-text-secondary">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-2 px-5 text-left"
      >
        <span className="text-md font-normal">{title}</span>
        <span className="rotate-180 border border-text-primary rounded-[20px] py-0.5 px-2">
          <Chevrron />
        </span>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-700">
          <p className="text-sm text-gray-400 mt-3">
            Variable configuration options will be displayed here.
          </p>
        </div>
      )}
    </div>
  );
};

export default VariableSection;
