import Head from "next/head";
import React from "react";
import { Tongle } from "../components/Tongle";
import { useState, useEffect } from "react";
import PricingTable from "./PricingTable";
import dataOfTable from "../public/data.json";

const Home: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/getData")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API error");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.data);
      })
      .catch((error) => {
        setData(dataOfTable);
        console.error("get data error:", error);
      });
  }, []);

  return (
    <div>
      <Head children={<title>Pricing Table</title>} />
      <main>
        <h1 className="my-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Pricing
        </h1>
        <Tongle isChecked={isChecked} setIsChecked={setIsChecked} />
        {data && (
          <PricingTable
            priceList={isChecked ? data.LIST_YEARLY : data.LIST_MONTHLY}
            descriptionList={data.DESCRIPTION_LIST}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
