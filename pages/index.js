import Head from "next/head";
import { PricingTable } from "./PricingTable";
import { Tongle } from "../components/Tongle";

const LIST = [
  {
    name: "Free",
    money: "$0",
    description:
      "Description of the tier list will go here. copy should be concise and impactful.",
    listOfBenefits: [
      "Amazing feature one",
      "Wonderful feature two",
      "Priceless feature three",
      "Splended feature four",
    ],
    buttonText: "Try for Free",
  },
  {
    name: "Pro",
    money: "$12",
    duration: "month",
    description:
      "Description of the tier list will go here. copy should be concise and impactful.",
    upperBenefit: "Everything in the Free plan, plus",
    listOfBenefits: [
      "Amazing feature one",
      "Wonderful feature two",
      "Priceless feature three",
      "Splended feature four",
      "Delightful feature five",
    ],
    buttonText: "Subscribe Now",
    filledButton: true,
  },
  {
    name: "Enterprise",
    money: "Custom",
    duration: "yearOnly",
    description:
      "Description of the tier list will go here. copy should be concise and impactful.",
    upperBenefit: "Everything in the Pro plan, plus",
    listOfBenefits: [
      "Amazing feature one",
      "Wonderful feature two",
      "Priceless feature three",
      "Splended feature four",
      "Delightful feature five",
    ],
    buttonText: "Contact Sales",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pricing Table</title>
      </Head>
      <main>
        <h1 className="my-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Pricing
        </h1>
        <Tongle />
        <div className="flex justify-center">
          {LIST.map((item, index) => {
            const {
              name,
              money,
              duration,
              description,
              upperBenefit,
              listOfBenefits,
              buttonText,
              filledButton,
            } = item;
            return (
              <PricingTable
                key={index}
                name={name}
                money={money}
                duration={duration}
                description={description}
                upperBenefit={upperBenefit}
                listOfBenefits={listOfBenefits}
                buttonText={buttonText}
                filledButton={filledButton}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
