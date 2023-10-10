import PricingList from "./PricingList";

const PricingTable = ({ priceList = [], descriptionList = [] }) => {
  return (
    <div className="flex justify-center">
      {priceList.map((item, index) => {
        const { money, duration } = item;
        const {
          name,
          description,
          upperBenefit,
          listOfBenefits,
          buttonText,
          filledButton,
        } = descriptionList[index];
        return (
          <PricingList
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
  );
};

export default PricingTable;
