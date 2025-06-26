import React, { type FC } from "react";
import { Button } from "../ui/button";

export const VariableSelectButton: FC<{
  onClick?: () => void;
  text?: string;
  icon: React.ReactNode;
}> = ({ onClick, text, icon }) => {
  return (
    <Button
      variant="outline"
      className="text-white border border-[#2a2a2c] bg-[#1a1a1c] hover:bg-[#2a2a2c] hover:border-[#3a3a3c] flex items-center gap-1 transition-all duration-200"
      onClick={onClick}
    >
      {text} {icon}
    </Button>
  );
};
