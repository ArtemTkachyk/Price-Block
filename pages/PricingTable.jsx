import { useState } from "react";
import { CheckIcon } from "../components/CheckIcon";
import { StyledButton } from "../components/StyledButton";

const durationDisplay = {
  none: "",
  month: "/ month",
  year: "/ year",
  yearOnly: "yearly billing only",
};

export const PricingTable = ({
  name,
  money,
  duration = "none",
  description,
  upperBenefit,
  listOfBenefits = [],
  buttonText,
  filledButton,
}) => {
  return (
    <div className="bg-white py-10 ">
      <div className="mx-auto max-w-sm px-1 lg:px-5">
        <div className="mx-auto mt-4 max-w-2xl rounded-xl shadow-md ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
          <div className=" sm:p-8 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </h3>
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              {money}
            </span>
            <span className="mx-1">{durationDisplay[duration]}</span>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              {description}
            </p>
            <div className="mt-5 h-px flex-auto bg-gray-200" />
            <ul
              role="list"
              className="mt-5 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-800 sm:gap-5"
            >
              {upperBenefit && (
                <li key={upperBenefit} className="flex gap-x-3 text-gray-400">
                  {upperBenefit}
                </li>
              )}
              {listOfBenefits.map((item, index) => {
                return (
                  <li key={index} className="flex gap-x-3">
                    <CheckIcon />
                    {item}
                  </li>
                );
              })}
              <StyledButton filledButton={filledButton}>
                {buttonText}
              </StyledButton>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
