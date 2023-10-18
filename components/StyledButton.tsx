import React from "react";

interface StyledButtonProps {
  children: any;
  filledButton: boolean;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  filledButton,
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md border   px-10 py-4 text-center text-lg font-bold  transition  hover:text-white lg:px-8 xl:px-10 ${
        filledButton
          ? "bg-purple-500 text-white hover:bg-purple-900"
          : "border-purple-600 text-purple-600 hover:bg-purple-600"
      }`}
    >
      {children}
    </button>
  );
};
